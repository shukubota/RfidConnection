package com.rfidconnection;

import android.util.Log;

import androidx.annotation.Nullable;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

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
        WritableMap res = Arguments.createMap();
        res.putString("eventProperty", "hogee");
        sendEvent(getReactApplicationContext(), "discoveredDevice", res);
    }

    private void sendEvent(ReactContext reactContext,
                           String eventName,
                           @Nullable WritableMap params) {
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }
    @ReactMethod
    public void addListener(String eventName) {
        // Set up any upstream listeners or background tasks as necessary
    }

    @ReactMethod
    public void removeListeners(Integer count) {
        // Remove upstream listeners, stop unnecessary background tasks
    }
}
