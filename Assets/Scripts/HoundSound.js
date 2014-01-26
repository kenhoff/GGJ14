#pragma strict

public var runSounds : AudioClip [];
public var sniffSound : AudioClip;
public var snapSound : AudioClip;


private var sound : AudioClip;

function Start () {

}

function Update () {

}

function PlayRunSound () {
	if (Random.value < 0.1) {
		if (transform.parent.GetComponent(HoundControl).RunAway) {
			audio.PlayOneShot(sniffSound);
		}
		else {
			sound = runSounds[Mathf.Floor(Random.value*runSounds.length)];
			audio.PlayOneShot(sound);
		}
	}

}

function PlaySnapSound () {
	audio.PlayOneShot(snapSound);
}