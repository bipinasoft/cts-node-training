
// employees create script
CREATE TABLE `employees` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `emp_no` int(11) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;


// get_employees
DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_getemployees`()
BEGIN
    SELECT id, emp_no, first_name, last_name FROM employees;
END$$
DELIMITER ;


// get employee details
DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_get_employee_details`(
  in employee_id int
)
BEGIN
  SELECT emp_no, first_name, last_name FROM employees where id = employee_id;
END$$
DELIMITER ;

// insert employee
DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_insert_employee`(
  out id int,
  emp_no int,
  in first_name varchar(100),
  in last_name varchar(100)
)
BEGIN
  insert into employees(emp_no, first_name, last_name)
  values(emp_no, first_name, last_name);
  set id = LAST_INSERT_ID();
END$$
DELIMITER ;