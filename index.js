const sql = require("msnodesqlv8"); // npm add msnodesqlv8 (Windows Only)

// ODBC Connection string
const connectionString = "Server=localhost;Database=Library;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";

sql.query(connectionString, "SELECT * FROM Students" , (err, recordset) => {
    if(err) {
        console.log(err);
        return;
    }
    for(var i in recordset)
	{
		var row = recordset[i];
		console.log(row.FirstName + ' ' + row.Surname);
	}
    return;
});
