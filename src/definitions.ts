export interface CameraCapPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  openCamera(): Promise<void>;
  capturePhoto(): Promise<string>; // or any suitable return type for your use case
  releaseCamera(): Promise<void>;
}
