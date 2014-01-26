#pragma strict


public var MaxHealth : float = 100;
public var health : float;

public var RegenRate : float = 1;
public var renderObj : GameObject;

function Start () {
	health = MaxHealth;
}

function Update () {
	if (health <= 0) {
		Destroy(renderObj);
		Destroy(gameObject);
		//other endgame logic
	}
	health += Time.deltaTime * RegenRate;
	if (health > MaxHealth) {
		health = MaxHealth;
	}

	light.color = Color(1, (health / MaxHealth), (health / MaxHealth));
}