#pragma strict

public var flashlight : GameObject;

function Start () {

}

function Update () {

}

function OnTriggerEnter (collider : Collider) {
	if ((collider.gameObject.tag == "Hound") && (flashlight.light.enabled)) {
		var houndControl = collider.gameObject.GetComponent(HoundControl);
		houndControl.RunAway = true;
		houndControl.timeRunning = 0;
	}
}