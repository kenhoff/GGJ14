#pragma strict

public var MaxSanitySeconds : float;
public var HideZoneRechargeRate : float = 0.1;
public var HideZoneRechargeBoost : float;
public var PillsRechargeBoost : float;

private var SecondsLeft : float = MaxSanitySeconds;
private var PercentLeft : float;

function Start () {
	SecondsLeft = MaxSanitySeconds;
	PercentLeft = 100;
}

function Update () {

	var hit : RaycastHit;

	if (Physics.Raycast(transform.position, Vector3.down, hit)) {
		if (hit.transform.tag == "HideZone") {
			hideZoneSanity();
		}
		else {
			decreaseSanity();
		}
	}
	// Debug.Log(SecondsLeft);
	if (SecondsLeft >= MaxSanitySeconds) {
		SecondsLeft = MaxSanitySeconds;
	}
	PercentLeft = SecondsLeft / MaxSanitySeconds;
	Debug.Log(PercentLeft);

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