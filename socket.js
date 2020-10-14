import { Socket } from "phoenix";

/**
 * phoenix package does not support async params, so we need to create a intermediary socket class to handle
 * NOTE: it will show "passing params to connect is deprecated" message when connecting,
 * but one of package authors suggested this approach.
 * @see https://github.com/phoenixframework/phoenix/issues/3515#issuecomment-628192821
 */
export default class AsyncParamsPhoenixSocket extends Socket {
  params;

  constructor(endPoint, opts = {}) {
    super(endPoint, opts);

    this.params = opts.params || {};
  }

  connect(_params) {
    if (
      this.params?.constructor == Function &&
      this.params()?.constructor === Promise
    ) {
      Promise.resolve(this.params()).then((params) => super.connect(params));
    } else {
      super.connect();
    }
  }
}
