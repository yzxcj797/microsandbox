import { describe, expect, it } from "vitest";
import {
  sshClientOptionsToNapi,
  sshServerOptionsToNapi,
} from "../../dist/ssh.js";

describe("SSH inactivity timeout options", () => {
  it("preserves client timeout values, including zero", () => {
    expect(sshClientOptionsToNapi(undefined)).toBeUndefined();
    expect(
      sshClientOptionsToNapi({ inactivityTimeoutSecs: 30 }),
    ).toMatchObject({ inactivityTimeoutSecs: 30 });
    expect(
      sshClientOptionsToNapi({ inactivityTimeoutSecs: 0 }),
    ).toMatchObject({ inactivityTimeoutSecs: 0 });
  });

  it("preserves server timeout values, including zero", () => {
    expect(sshServerOptionsToNapi(undefined)).toBeUndefined();
    expect(
      sshServerOptionsToNapi({ inactivityTimeoutSecs: 30 }),
    ).toMatchObject({ inactivityTimeoutSecs: 30 });
    expect(
      sshServerOptionsToNapi({ inactivityTimeoutSecs: 0 }),
    ).toMatchObject({ inactivityTimeoutSecs: 0 });
  });
});
