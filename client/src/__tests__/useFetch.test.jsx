import { useFetch } from "../utils/Hooks";
import { renderHook } from "@testing-library/react-hooks";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

it("test for data check", async () => {
  const mock = new MockAdapter(axios);
  const mockData = "response";
  const url = "http://numbersapi.com/2/math";
  mock.onGet(url).reply(200, mockData);

  const { result, waitForNextUpdate } = renderHook(() => useFetch(url));
  waitForNextUpdate();
  expect(result.current.fact).toMatch(/response/);
});

it("test for Error check", async () => {
  const mock = new MockAdapter(axios);
  const mockData = {
    code: "404",
    message: "Bad Request",
  };
  const url = "http://numbersapi.com/2/math";
  mock.onGet(url).reply(404, mockData);

  const { result, waitForNextUpdate } = renderHook(() => useFetch(url));
  await waitForNextUpdate();
  console.log(result.current.Error);
  expect(result.current.Error?.message).toMatch(/Bad Request/);
});
