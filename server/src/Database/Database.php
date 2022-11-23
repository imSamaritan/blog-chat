<?php
namespace Blog\Chat\Database;

use PDO;
use PDOException;

class Database {

	function connect($_conn): void {
		if ($_conn) print "connected";
		else print "Failed to connect";
	}
}