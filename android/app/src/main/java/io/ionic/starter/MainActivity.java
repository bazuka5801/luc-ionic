package com.luc.app;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import java.util.ArrayList;

import com.bazumax.plugins.vk.VKAuth;
import com.codetrixstudio.capacitor.GoogleAuth.GoogleAuth;
import com.ahm.capacitor.camera.preview.CameraPreview;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
      add(VKAuth.class);
      add(CameraPreview.class);
      add(GoogleAuth.class);
    }});
  }
}
