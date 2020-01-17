package com.example.usbacc;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.BaseActivityEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;

import static android.app.Activity.RESULT_OK;

public class RNUsbAccModule extends ReactContextBaseJavaModule {
	public static String USC_ACC_MAIN_INTENT = "USC_ACC_MAIN_INTENT";
	private static int USC_ACC_MAIN_ACTIVITY_CODE = 777;
	private static String USC_ACC_MAIN_ACTIVITY_FAILED_CODE = "-1";
	private ReadableMap options;
	private Promise promise;
	private final ReactApplicationContext reactContext;

	public RNUsbAccModule(ReactApplicationContext reactContext) {
		super(reactContext);
		this.reactContext = reactContext;
	}

	@Override
	public String getName() {
		return "RNUsbAcc";
	}

	private final ActivityEventListener mActivityEventListener = new BaseActivityEventListener() {
		@Override
		public void onActivityResult(Activity activity, int requestCode, int resultCode, final Intent data) {
			if (resultCode == RESULT_OK) {
				String result = data.getStringExtra(USC_ACC_MAIN_INTENT);
				invokeSuccessWithResult(result);
			} else {
				invokeError(resultCode);
			}
		}
	};

	@ReactMethod
	public void start(ReadableMap options, Promise promise) {
		this.options = options;
		this.promise = promise;
		this.reactContext.addActivityEventListener(mActivityEventListener);
		this.startMainAcitivity();
	}

	private void startMainAcitivity() {
		Activity currentActivity = getCurrentActivity();
		Context context = currentActivity;
		Intent i = new Intent(context, MainActivity.class);
		// i.putExtra("something", "something");
		currentActivity.startActivityForResult(i, USC_ACC_MAIN_ACTIVITY_CODE);
	}

	private void invokeSuccessWithResult(String receivedData) {
		if (this.promise != null) {
			this.promise.resolve(receivedData);
		}
	}

	private void invokeError(int resultCode) {
		String message = "취소";
		if (resultCode != 0) {
			message = String.valueOf(resultCode);
		}
		if (this.promise != null) {
			this.promise.reject(USC_ACC_MAIN_ACTIVITY_FAILED_CODE, message);
		}
	}
}