#pragma strict

public var Player : Transform;

function Start () {

}

function Update () {
	transform.position = Player.transform.position;
	transform.position.y = 10;
}