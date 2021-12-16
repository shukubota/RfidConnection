package com.rfidconnection;

import android.util.Log;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class RfidModule extends ReactContextBaseJavaModule {
    RfidModule(ReactApplicationContext context) {
        super(context);
    }
    @Override
    public String getName() {
        return "RfidModule";
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public void setName(String params) {
        Log.d("aaa", "aaaaa");
        Log.d("params", params);
    }
}
