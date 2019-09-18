module.exports = {
  user: "sljsbwjr7xvd443z",
  password: "krk1ken16t4g1rcd",
  database: "r64jxb8s3qaocb70",
  host: "phtfaw4p6a970uc0.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  logging: console.log,
  maxConcurrentQueries: 100,
  dialect: "mysql",
  dialectOptions: {
    ssl: "Amazon RDS"
  },
  define: {
    timestamps: true
  },
  pool: { maxConnections: 5, maxIdleTime: 30 }
};
