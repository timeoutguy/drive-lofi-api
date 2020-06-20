module.exports = {
  dialect: 'postgres',
  port: '5432',
  host: '127.0.0.1',
  username: 'postgres',
  password: 'secret123',
  database: 'drive-and-listen',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  }
}