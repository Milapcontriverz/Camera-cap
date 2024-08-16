package com.contriverz.camera.cap;

import android.util.Log;
import android.hardware.Camera;
public class CameraCap {
    private Camera camera;
    public void openCamera() {
        try {
            camera = Camera.open();
            Log.i("CameraCap", "Camera opened successfully");
        } catch (Exception e) {
            Log.e("CameraCap", "Error opening camera: " + e.getMessage());
        }
    }

    // Method to capture a photo
    public void capturePhoto(Camera.PictureCallback callback) {
        if (camera != null) {
            camera.takePicture(null, null, callback);
            Log.i("CameraCap", "Capture photo request sent");
        } else {
            Log.e("CameraCap", "Camera is not opened");
        }
    }

    // Method to release the camera
    public void releaseCamera() {
        if (camera != null) {
            camera.release();
            camera = null;
            Log.i("CameraCap", "Camera released");
        }
    }

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}
