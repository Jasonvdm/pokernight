package models

import slick.jdbc.MySQLProfile.api._
import slick.lifted._

import scala.concurrent.{ ExecutionContext, Future }
import javax.inject.Inject
import play.api.db.slick.DatabaseConfigProvider
import play.api.db.slick.HasDatabaseConfigProvider
import play.db.NamedDatabase
import slick.jdbc.JdbcProfile

case class User(id: Int, username: String, code: String, isAdmin: Boolean)
case class Transaction(id: Int, `type`: String, gameId: Int, amount: Double, status: String)

class UsersTable(tag: Tag) extends Table[User](tag, "users") {
  def id = column[Int]("id", O.PrimaryKey, O.AutoInc)
  def username = column[String]("username")
  def code = column[String]("code")
  def isAdmin = column[Boolean]("is_admin")
  def * = (id, username, code, isAdmin) <> (User.tupled, User.unapply)
}

class UsersReaderWriter @Inject() (@NamedDatabase("production_db") protected val dbConfigProvider: DatabaseConfigProvider)(implicit executionContext: ExecutionContext) extends HasDatabaseConfigProvider[JdbcProfile] {
  import profile.api._

  private val Users = TableQuery[UsersTable]

  def all(): Future[Set[User]] = {

    db.run(Users.result).map(_.toSet)
  }

  def insert(newUser: User): Future[Unit] = db.run(Users += newUser).map { _ => () }
}
