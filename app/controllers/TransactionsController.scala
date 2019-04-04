package controllers

import javax.inject.{Inject, Singleton}
import play.api.libs.json._
import play.api.libs.functional.syntax._
import play.api.mvc._

@Singleton
class TransactionsController @Inject()(cc: ControllerComponents) extends AbstractController(cc) {

  def createTransaction() = Action { implicit request: Request[AnyContent] =>
    val jsonDump = request.body.asJson
    if (jsonDump.isDefined) {
      Ok("")
    } else {
      BadRequest("Byyyeee")
    }
  }
}