#pragma strict

public var MaxSpeed : float = 20;
public var Accel : float = 30;

private var DeadZone : float = 0.5;
private var JerkForce : float = 500;

private var PlayerTarget : GameObject;

public var RunAway : boolean = false;
public var timeToRun : float = 4;
public var timeRunning : float = 0;

function Start () {

	PlayerTarget = GameObject.FindGameObjectsWithTag("Player")[0];

}

function FixedUpdate () {

	var directionOfPlayer = (PlayerTarget.transform.position - transform.position).normalized;

	if (PlayerTarget.GetComponent(PlayerSanity).isHiding) {
		directionOfPlayer = -directionOfPlayer;
	}

	if (RunAway) {
		directionOfPlayer = -directionOfPlayer;
	}

	// Debug.Log(directionOfPlayer);

	rigidbody.AddForce(directionOfPlayer * Accel);

	if (rigidbody.velocity.magnitude > MaxSpeed) {
		rigidbody.velocity = rigidbody.velocity.normalized * MaxSpeed;
	}

	if (rigidbody.velocity.magnitude < 0.5) {
		Debug.Log ("Jerk force");
		rigidbody.AddForce(Vector3(Random.value, 0, Random.value) * JerkForce);
	}

	if (timeRunning > timeToRun) {
		RunAway = false;
	}
	else {
		timeRunning += Time.deltaTime;
	}

	// Debug.Log(rigidbody.velocity.magnitude);
}

function OnCollisionEnter (collision : Collision) {
	if (collision.gameObject.tag == "Player") {
		collision.gameObject.GetComponent(PlayerHealth).health -= 25;
	}
}