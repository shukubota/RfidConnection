package com.rfidconnection

import android.util.Log
import android.view.View
import android.view.ViewManager
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.uimanager.ReactShadowNode
import java.util.*

//open class ReactContextBaseJavaModule(val context: ReactApplicationContext){
//    open fun getName(): String {
//        return "";
//    }
//    open fun setName() {
//
//    }
//}

class RfidModule(context: ReactApplicationContext): ReactContextBaseJavaModule(context) {
    override fun getName(): String {
        return "RfidModule";
    }

    @ReactMethod
    fun setName() {
        Log.d("aaa", "aaaaa");
    }
}

class RfidConnectPackage: ReactPackage {
    override fun createViewManagers(reactContext: ReactApplicationContext): MutableList<com.facebook.react.uimanager.ViewManager<View, ReactShadowNode<*>>> {
        return Collections.emptyList();
    }
    override fun createNativeModules(reactContext: ReactApplicationContext): MutableList<NativeModule> {
        val modules: MutableList<NativeModule> = ArrayList();
        modules.add(RfidModule(reactContext));
        return modules;
    }
}