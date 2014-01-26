#pragma strict

public var Player : GameObject;
public var HoundObject : GameObject;

private var NumberOfHounds : int;
private var PlayerSanityPercent : float;

private var MaxHounds : int;

function Start () {

}

function Update () {
	NumberOfHounds = GameObject.FindGameObjectsWithTag("Hound").length;
	// Debug.Log(NumberOfHounds);
	PlayerSanityPercent = Player.GetComponent(PlayerSanity).PercentLeft;
	Debug.Log("Sanity:" + PlayerSanityPercent);

	if (PlayerSanityPercent > 0.5) {
		MaxHounds = 0;
	}
	else if (PlayerSanityPercent > 0.3) {
		MaxHounds = 1;
	}
	else if (PlayerSanityPercent > 0.2) {
		MaxHounds = 2;
	}
	else if (PlayerSanityPercent > 0.1) {
		MaxHounds = 4;
	}
	else if (PlayerSanityPercent > 0) {
		MaxHounds = 8;
	}
	else {
		MaxHounds = 20;
	}

	if (NumberOfHounds < MaxHounds) {
		SpawnHound();
	}

	// Debug.Log("Number of hounds: " + NumberOfHounds);
	// Debug.Log("Max hounds: " + MaxHounds);

	if (NumberOfHounds > MaxHounds) {
		var hounds = GameObject.FindGameObjectsWithTag("Hound");
		var hound = hounds[Mathf.Floor(Random.value*hounds.length)];
		Destroy(hound);
	}

}

function SpawnHound () {
	var spawners = GameObject.FindGameObjectsWithTag("Respawn");
	var spawner = spawners[Mathf.Floor(Random.value*spawners.length)];
	// Debug.Log(spawner);

	var hound = Instantiate(HoundObject, spawner.transform.position, Quaternion.identity);
}