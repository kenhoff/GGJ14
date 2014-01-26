#pragma strict

public var scaryMusic : GameObject;
public var normalMusic : GameObject;
public var Player : GameObject;
public var max_vol : float = 0.1;

function Start () {

}

function Update () {

	// @script RequireComponent(AudioSource);
	var sanityLevel = Player.GetComponent(PlayerSanity).PercentLeft;
	// Debug.Log(sanityLevel);
	normalMusic.audio.volume = (sanityLevel) * max_vol;
	scaryMusic.audio.volume = (1-sanityLevel) * max_vol;

}