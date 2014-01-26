#pragma strict

public var MaxCharge : float = 10;
public var RechargeTime : float = 5;
public var Player : GameObject;

private var charge : float = MaxCharge; // the amount of seconds left in the tank
private var burnout : boolean = false; // the flag to set if it's been left on too long and can't turn on again

public var flashlightOn : AudioClip;
public var flashlightOff : AudioClip;
public var flashlightBurnt : AudioClip;

private var playedOnSound : boolean = false;
private var playedOffSound : boolean = false;

function Start () {

}

function Update () {
	var hiding = Player.transform.GetComponent(PlayerSanity).isHiding;
	var input = Input.GetAxis("Flashlight");
	if ((input > 0) && (charge > 0) && (!burnout) && (!hiding)) {
		// Debug.Log("flashlight on");
		light.enabled = true;
		charge -= Time.deltaTime;

		if (!playedOnSound) {
			audio.PlayOneShot(flashlightOn);
			playedOnSound = true;
		}
		playedOffSound = false;

	}
	else {
		playedOnSound = false;
		if (!playedOffSound) {
			audio.PlayOneShot(flashlightOff);
			playedOffSound = true;
		}
		// Debug.Log("flashlight off");
		light.enabled = false;
		charge += Time.deltaTime * (MaxCharge / RechargeTime); //recharges x times as fast as depletes
	}

	if ((burnout) && (charge > MaxCharge)) {
		burnout = false;
		audio.PlayOneShot(flashlightBurnt);
	}

	if (charge < 0) {
		burnout = true;
		charge = 0;
		audio.PlayOneShot(flashlightBurnt);
		playedOnSound = false;
		playedOffSound = false;
	}

	if (charge > MaxCharge) {
		charge = MaxCharge;
	}

	// var hit : RaycastHit;
	// var dist : float;

	// if (Physics.Raycast(transform.position, Vector3.forward, hit)) {
	// 	if (hit.transform.tag == "Wall") {
	// 		dist = hit.distance;
	// 		Debug.Log(dist);
	// 	}
	// }

	// light.range = dist;
	// light.intensity = (1 / dist) * 10;

	// Debug.Log(charge);


}

