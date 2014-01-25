#pragma strict


public var MaxHealth : float = 100;
public var health : float;

public var RegenRate : float = 1;

function Start () {
	health = MaxHealth;
}

function Update () {
	if (health <= 0) {
		Destroy(gameObject);
		//other endgame logic
	}
	health += Time.deltaTime * RegenRate;
	if (health > MaxHealth) {
		health = MaxHealth;
	}
}