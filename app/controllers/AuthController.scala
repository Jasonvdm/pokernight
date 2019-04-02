package controllers

import javax.inject.{Inject, Singleton}
import play.api.libs.json._
import play.api.libs.functional.syntax._
import play.api.mvc._

@Singleton
class AuthController @Inject()(cc: ControllerComponents) extends AbstractController(cc) {

  def authenticatePlayer() = Action { implicit request: Request[AnyContent] =>
    System.out.println(request.hasBody)
    System.out.println(request.body.asJson)

    val jsonDump = request.body.asJson
    if (jsonDump.isDefined) {
      val name: String = (jsonDump.get \ "username").as[String]
      val code: Int = (jsonDump.get \ "code").as[Int]
      System.out.println(name)
      System.out.println(code)
    }
    Ok(Json.toJson(true))
  }
}