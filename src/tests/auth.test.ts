import { getAPIKey } from "../api/auth";  // no .js extension
import { describe, test, expect } from "vitest";

describe("getAPIKey", () => {
  test("returns null if headers are empty", () => {
    const headers = {};
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null if authorization header is missing", () => {
    const headers = { "content-type": "application/json" };
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null if authorization header is malformed", () => {
    const headers = { "authorization": "Bearer abc123" };
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns API key if header is correctly formatted", () => {
    const headers = { "authorization": "ApiKey my-secret-key" };
    expect(getAPIKey(headers)).toBe("my-secret-key");
  });

  test("returns null if header has only 'ApiKey' without key", () => {
    const headers = { "authorization": "ApiKey" };
    expect(getAPIKey(headers)).toBeNull();
  });
});
