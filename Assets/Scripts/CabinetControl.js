#pragma strict

public var HasPills : boolean = false;
public var UsedCabinet : GameObject;
public var PillEmitter : GameObject;

function Start () {

}

function Update () {

}

function OnCollisionEnter (collision : Collision) {
	Debug.Log(collision.gameObject.tag);
	if (collision.gameObject.tag == "Player") {
		// audio.Play();
		if (HasPills) {
			collision.gameObject.GetComponent(PlayerSanity).getPills();
			Instantiate(PillEmitter, transform.position + Vector3(0, 2, 0), Quaternion.identity);
		}

		var new_cabinet = Instantiate(UsedCabinet, transform.position, transform.rotation);

		Destroy(gameObject);

	}
}