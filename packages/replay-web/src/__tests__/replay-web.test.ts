import fetchMock from "fetch-mock";
import { renderCanvas } from "../index";
import {
  TestGameWithAssets,
  pressKey,
  releaseKey,
  canvasToImage,
  MockTime,
  updateMockTime,
  getTestAssets,
  testGameProps,
  TestGameWithSprites,
  TestGame,
  resizeWindow,
  TestGameThrowImageError,
  TestNativeSpriteWeb,
  TestGameWithNativeSprite,
  clickPointer,
} from "./utils";
import { t, GameProps } from "@replay/core";

const mockTime: MockTime = { nextFrame: () => undefined };

beforeEach(() => {
  updateMockTime(mockTime);
  fetchMock.getOnce("shoot.wav", { arrayBuffer: jest.fn() });
});

test("Can render image moving across screen", async () => {
  const canvas = document.createElement("canvas");
  const { loadPromise } = renderCanvas(TestGameWithAssets(testGameProps), {
    loadingTextures: [
      t.text({
        x: 0,
        y: 0,
        rotation: 0,
        font: { name: "serif", size: 22 },
        text: "Loading...",
        color: "black",
      }),
    ],
    assets: getTestAssets(),
    dimensions: "game-coords",
    canvas,
  });

  // 1: loading scene
  expect(canvasToImage(canvas)).toMatchImageSnapshot();

  await loadPromise;
  mockTime.nextFrame();

  // 2: renders enemy in start position
  expect(canvasToImage(canvas)).toMatchImageSnapshot();

  pressKey("ArrowRight");
  mockTime.nextFrame();

  // 3: enemy moves right + 45 deg rot
  expect(canvasToImage(canvas)).toMatchImageSnapshot();

  mockTime.nextFrame();

  // 4: enemy moves right + 90 deg rot
  expect(canvasToImage(canvas)).toMatchImageSnapshot();

  releaseKey("ArrowRight");
  mockTime.nextFrame();

  // 5: enemy hasn't moved
  expect(canvasToImage(canvas)).toMatchImageSnapshot();
});

test("Canvas elements are drawn in order of sprites passed in", () => {
  const canvas = document.createElement("canvas");
  renderCanvas(TestGameWithAssets(testGameProps), {
    loadingTextures: [
      t.circle({
        x: 0,
        y: 0,
        rotation: 0,
        radius: 100,
        color: "red",
      }),
      t.circle({
        x: 0,
        y: 0,
        rotation: 0,
        radius: 50,
        color: "blue",
      }),
    ],
    assets: getTestAssets(),
    dimensions: "game-coords",
    canvas,
  });

  // blue circle on red circle
  expect(canvasToImage(canvas)).toMatchImageSnapshot();
});

test("Can render game with Sprites", async () => {
  const canvas = document.createElement("canvas");
  const { loadPromise } = renderCanvas(TestGameWithSprites(testGameProps), {
    canvas,
  });

  await loadPromise;
  mockTime.nextFrame();

  // 1: renders player in start position
  expect(canvasToImage(canvas)).toMatchImageSnapshot();

  pressKey("ArrowRight");
  mockTime.nextFrame();

  // 2: player moves right (and down from rotation)
  expect(canvasToImage(canvas)).toMatchImageSnapshot();

  mockTime.nextFrame();

  // 3: player moves further right-down
  expect(canvasToImage(canvas)).toMatchImageSnapshot();

  releaseKey("ArrowRight");
  mockTime.nextFrame();

  // 4: player hasn't moved
  expect(canvasToImage(canvas)).toMatchImageSnapshot();
});

test("Dimension 'game-coords' renders the minimum size", () => {
  const canvas = document.createElement("canvas");

  const props: GameProps = {
    id: "Game",
    size: { width: 200, height: 200, maxWidthMargin: 10, maxHeightMargin: 20 },
  };
  renderCanvas(TestGame(props), { dimensions: "game-coords", canvas });

  expect(canvas.width).toBe(200);
  expect(canvas.height).toBe(200);
});

test("Dimension 'scale-up' renders up to browser size and resizes", () => {
  const canvas = document.createElement("canvas");
  (window as any).innerWidth = 600;
  (window as any).innerHeight = 400;

  const props: GameProps = {
    id: "Game",
    size: { width: 200, height: 200, maxWidthMargin: 10, maxHeightMargin: 20 },
  };
  renderCanvas(TestGame(props), { dimensions: "scale-up", canvas });

  // the game is square so width scales up to max 400px (scale 2)
  // so a margin of 10 game coordinates allowed on each side = 40px extra width
  expect(canvas.width).toBe(440);
  expect(canvas.height).toBe(400);

  resizeWindow(300, 600); // scale 1.5

  expect(canvas.width).toBe(300);
  expect(canvas.height).toBe(360);
});

test("Unknown image name throws readable error", async () => {
  const canvas = document.createElement("canvas");

  let error = "";
  try {
    const { loadPromise } = renderCanvas(
      TestGameThrowImageError(testGameProps),
      { dimensions: "scale-up", canvas }
    );
    await loadPromise;
  } catch (e) {
    error = (e as Error).message;
  }

  expect(error).toBe(`Cannot find image file "unknown.png"`);
});

test("Supports Native Sprites", async () => {
  console.log = jest.fn();

  const canvas = document.createElement("canvas");
  const { loadPromise } = renderCanvas(
    TestGameWithNativeSprite(testGameProps),
    { nativeSpriteMap: { TestNativeSprite: TestNativeSpriteWeb }, canvas }
  );
  await loadPromise;

  expect(console.log).toBeCalledWith("Create");

  mockTime.nextFrame();
  expect(console.log).toBeCalledWith("Loop");

  clickPointer(0, 0);
  mockTime.nextFrame();
  expect(console.log).toBeCalledWith("Cleanup");
});
