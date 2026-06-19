import { NativeModule } from "craby-modules";

//#region src/NativeReactNativeNitroTor.d.ts
interface TorConfig {
  socks_port: number;
  data_dir: string;
  timeout_ms: number;
}
interface HiddenServiceParams {
  port: number;
  target_port: number;
}
interface StartTorParams {
  data_dir: string;
  socks_port: number;
  target_port: number;
  timeout_ms: number;
}
interface StartTorResponse {
  is_success: boolean;
  onion_address: string;
  control: string;
  error_message: string;
}
interface HiddenServiceResponse {
  is_success: boolean;
  onion_address: string;
  control: string;
}
interface HttpGetParams {
  url: string;
  headers: string;
  timeout_ms: number;
  trust_invalid_certs: boolean;
}
interface HttpPostParams {
  url: string;
  body: string;
  headers: string;
  timeout_ms: number;
  trust_invalid_certs: boolean;
}
interface HttpPutParams {
  url: string;
  body: string;
  headers: string;
  timeout_ms: number;
  trust_invalid_certs: boolean;
}
interface HttpDeleteParams {
  url: string;
  headers: string;
  timeout_ms: number;
  trust_invalid_certs: boolean;
}
interface HttpResponse {
  status_code: number;
  body: string;
  error: string;
}
interface Spec extends NativeModule {
  initTorService(config: TorConfig): Promise<boolean>;
  createHiddenService(params: HiddenServiceParams): Promise<HiddenServiceResponse>;
  startTorIfNotRunning(params: StartTorParams): Promise<StartTorResponse>;
  getServiceStatus(): Promise<number>;
  deleteHiddenService(onionAddress: string): Promise<boolean>;
  shutdownService(): Promise<boolean>;
  httpGet(params: HttpGetParams): Promise<HttpResponse>;
  httpPost(params: HttpPostParams): Promise<HttpResponse>;
  httpPut(params: HttpPutParams): Promise<HttpResponse>;
  httpDelete(params: HttpDeleteParams): Promise<HttpResponse>;
}
declare const _default: Spec;
//#endregion
export { _default as RnTor };
//# sourceMappingURL=index.d.ts.map