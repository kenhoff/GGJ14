#pragma strict

public var MaxSanitySeconds : float;
public var HideZoneRechargeRate : float = 0.1;
public var HideZoneRechargeBoost : float;
public var PillsRechargeBoost : float;

public var isHiding : boolean;

private var SecondsLeft : float = MaxSanitySeconds;
public var PercentLeft : float;

function Start () {
	SecondsLeft = MaxSanitySeconds;
	PercentLeft = 100;
}

function Update () {

	var hit : RaycastHit;

	if (Physics.Raycast(transform.position, Vector3.down, hit)) {
		// Debug.Log(hit.collider.name);
		if (hit.transform.tag == "HideZone") {
			// Debug.Log("in a hide zone");
			hideZoneSanity();
			isHiding = true;
		}
		else {
			// Debug.Log("not in a hide zone");			
			isHiding = false;
			decreaseSanity();
		}
	}
	// Debug.Log(SecondsLeft);
	if (SecondsLeft >= MaxSanitySeconds) {
		SecondsLeft = MaxSanitySeconds;
	}
	PercentLeft = SecondsLeft / MaxSanitySeconds;
	// Debug.Log(PercentLeft);

	adjustLightRadius(PercentLeft);

	if (isHiding) {
		light.enabled = false;
	}
	else {
		light.enabled = true;
	}

}

function adjustLightRadius (value : float) {
	var max_radius = 20;
	var min_radius = 5;
	light.range = ((max_radius - min_radius) * value) + min_radius;
}

function decreaseSanity () : void {
	SecondsLeft -= Time.deltaTime;

	if (SecondsLeft < 0) {
		SecondsLeft = 0;
	}

}

function hideZoneSanity() {
	SecondsLeft += Time.deltaTime * HideZoneRechargeRate;
}

public function getPills () {
	SecondsLeft += PillsRechargeBoost;
}