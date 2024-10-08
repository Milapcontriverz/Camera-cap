export interface CameraCapPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    openCamera(): Promise<{
        imageUri: string;
    }>;
}
