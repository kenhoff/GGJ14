#pragma strict

public var HasPills : boolean = false;
public var UsedCabinet : GameObject;

function Start () {

}

function Update () {

}

function OnCollisionEnter (collision : Collision) {
	Debug.Log(collision.gameObject.tag);
	if (collision.gameObject.tag == "Player") {
		if (HasPills) {
			collision.gameObject.GetComponent(PlayerSanity).getPills();
		}

		var new_cabinet = Instantiate(UsedCabinet, transform.position, transform.rotation);
		Destroy(gameObject);

	}
}