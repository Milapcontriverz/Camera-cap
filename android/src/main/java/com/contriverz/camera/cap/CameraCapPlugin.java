package com.contriverz.camera.cap;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import android.content.Intent;
import android.provider.MediaStore;
import android.app.Activity;
import android.net.Uri;
import androidx.activity.result.ActivityResultLauncher;
import androidx.activity.result.contract.ActivityResultContracts;

@CapacitorPlugin(name = "CameraCap")
public class CameraCapPlugin extends Plugin {

    private CameraCap implementation = new CameraCap();
    private PluginCall savedCall;

    private ActivityResultLauncher<Intent> cameraLauncher = getActivity().registerForActivityResult(
        new ActivityResultContracts.StartActivityForResult(),
        result -> {
            if (result.getResultCode() == Activity.RESULT_OK && savedCall != null) {
                Uri imageUri = result.getData().getData();
                JSObject ret = new JSObject();
                ret.put("imageUri", imageUri.toString());
                savedCall.resolve(ret);
            } else {
                savedCall.reject("Camera activity canceled");
            }
        }
    );

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }

    @PluginMethod
    public void openCamera(PluginCall call) {
        savedCall = call;

        Intent intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        if (intent.resolveActivity(getActivity().getPackageManager()) != null) {
            cameraLauncher.launch(intent);
        } else {
            call.reject("No camera app available");
        }
    }
}
