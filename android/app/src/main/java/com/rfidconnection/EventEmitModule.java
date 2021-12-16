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

public class EventEmitModule extends ReactContextBaseJavaModule {
    EventEmitModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "EventEmitModule";
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
        Log.d("eventName", eventName);
        // Set up any upstream listeners or background tasks as necessary
    }

    @ReactMethod
    public void removeListeners(Integer count) {
        Log.d("Countaaaaaaa", count.toString());
        // Remove upstream listeners, stop unnecessary background tasks
    }
//    WritableMap params = Arguments.createMap();
//    params.putString("eventProperty", "someValue");
//    sendEvent(reactContext, "EventReminder", params);
}
