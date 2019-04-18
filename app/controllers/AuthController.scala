package controllers

import scala.util.{Failure, Success}
import scala.concurrent.{ ExecutionContext, Future }
import scala.concurrent.ExecutionContext.Implicits.global
import javax.inject.{Inject, Singleton}
import play.api.libs.json._
import play.api.mvc._
import models.UsersReaderWriter
import play.api.db.slick.DatabaseConfigProvider
import play.api.libs.concurrent.CustomExecutionContext
import akka.actor._

trait MyExecutionContext extends ExecutionContext

class MyExecutionContextImpl @Inject()(system: ActorSystem)
  extends CustomExecutionContext(system, "my.executor") with MyExecutionContext

@Singleton
class AuthController @Inject()(myExecutionContext: MyExecutionContext, dbConfigProvider: DatabaseConfigProvider, cc: ControllerComponents) extends AbstractController(cc) {

  def authenticatePlayer() = Action.async { implicit request: Request[AnyContent] =>
    Future {
//      val usersReaderWriter = new UsersReaderWriter(dbConfigProvider)
//      usersReaderWriter.all().map { users =>
//        //      users.map { user =>
//        //        System.out.println(user.username)
//        //      }
//
//      }
      Ok(Json.toJson(true))
    }((myExecutionContext))
//    val allFUsers = usersReaderWriter.all()
//    allFUsers.map { users =>
//      users.map { user =>
//        System.out.println(user.username)
//        Ok(Json.toJson(true))
//      }
//    }

//    Future {
//      Ok("result of blocking call")
//      val jsonDump = request.body.asJson
//      if (jsonDump.isDefined) {
//        val name: String = (jsonDump.get \ "username").as[String]
//        val code: Int = (jsonDump.get \ "code").as[Int]
//
//        val usersReaderWriter = new UsersReaderWriter(dbConfigProvider)
//        val allFUsers = usersReaderWriter.all()
//        val operation = allFUsers.onComplete {
//          case Success(allUsers) => {
//            allUsers.foreach { user =>
//              System.out.println(user.username)
//            }
//            Ok(Json.toJson(true))
//          }
//          case Failure(e) => {
//            System.out.println("hi error")
//            System.out.println(e)
//            Ok(Json.toJson(true))
//          }
//            Ok(Json.toJson(true))
//        }
//        Ok(Json.toJson(true))
//      } else {
//        Ok(Json.toJson(false))
//      }
//    }
  }
}