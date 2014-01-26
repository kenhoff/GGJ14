#pragma strict

public var Player : GameObject;
public var Flashlight: GameObject;

private var anim : Animator;

function Start () {

	anim = GetComponent("Animator");

}

function Update () {

	//follow player
	transform.position = Player.transform.position;

	anim.SetFloat("PlayerSpeed", Player.rigidbody.velocity.magnitude);
	var vel : Vector3;

	if (Flashlight.light.enabled == true) { // flashlight is on
		// set facing in direction player is facing
		vel = Flashlight.transform.forward;
		Debug.Log(vel);

		if (vel.x > 0) { // right side
			if (vel.z > 0) { // upper right
				if (Mathf.Abs(vel.x) > Mathf.Abs(vel.z)) {
					// face right
					anim.SetInteger("Facing", 2);
				}
				else {
					// face up
					anim.SetInteger("Facing", 1);
				}
			}
			else { // lower right
				if (Mathf.Abs(vel.x) > Mathf.Abs(vel.z)) {
					//face right
					anim.SetInteger("Facing", 2);
				}
				else {
					//face down
					anim.SetInteger("Facing", 3);
				}
			}
		}
		else { // left side
			if (vel.z > 0) { // upper left
				if (Mathf.Abs(vel.x) > Mathf.Abs(vel.z)) {
					// face left
					anim.SetInteger("Facing", 4);
				}
				else {
					// face up
					anim.SetInteger("Facing", 1);
				}
			}
			else { // lower left
				if (Mathf.Abs(vel.x) > Mathf.Abs(vel.z)) {
					//face left
					anim.SetInteger("Facing", 4);
				}
				else {
					//face down
					anim.SetInteger("Facing", 3);
				}
			}
		}
	}

	else if (Player.rigidbody.velocity.magnitude > 2) {
		vel = Player.rigidbody.velocity;

		if (vel.x > 0) { // right side
			if (vel.z > 0) { // upper right
				if (Mathf.Abs(vel.x) > Mathf.Abs(vel.z)) {
					// face right
					anim.SetInteger("Facing", 2);
				}
				else {
					// face up
					anim.SetInteger("Facing", 1);
				}
			}
			else { // lower right
				if (Mathf.Abs(vel.x) > Mathf.Abs(vel.z)) {
					//face right
					anim.SetInteger("Facing", 2);
				}
				else {
					//face down
					anim.SetInteger("Facing", 3);
				}
			}
		}
		else { // left side
			if (vel.z > 0) { // upper left
				if (Mathf.Abs(vel.x) > Mathf.Abs(vel.z)) {
					// face left
					anim.SetInteger("Facing", 4);
				}
				else {
					// face up
					anim.SetInteger("Facing", 1);
				}
			}
			else { // lower left
				if (Mathf.Abs(vel.x) > Mathf.Abs(vel.z)) {
					//face left
					anim.SetInteger("Facing", 4);
				}
				else {
					//face down
					anim.SetInteger("Facing", 3);
				}
			}
		}
		
	}
	

	

	else {
		anim.SetInteger("Facing", 0); 
	}

}