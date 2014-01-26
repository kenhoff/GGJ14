#pragma strict

public var text : GameObject;

function Start () {

}

function Update () {

}

function OnTriggerEnter (collider : Collider) {
	if (collider.gameObject.tag == "Player") {
		text.SetActive(true);
	}
}