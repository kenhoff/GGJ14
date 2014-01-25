#pragma strict

public var PlayerSpeed : float = 1;

function Start () {

}

function FixedUpdate () {
	rigidbody.velocity = Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical")) * PlayerSpeed;

	transform.LookAt(transform.position + Vector3(Input.GetAxis("LookHorizontal"), 0, Input.GetAxis("LookVertical")));


}