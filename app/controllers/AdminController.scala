package controllers

import javax.inject.{Inject, Singleton}
import play.api.libs.json._
import play.api.libs.functional.syntax._
import play.api.mvc._

@Singleton
class AdminController @Inject()(cc: ControllerComponents) extends AbstractController(cc) {

  def getAllTransactions() = Action { implicit request: Request[AnyContent] =>
    val mockData = Json.arr(
        Json.obj(
          "id" -> 4,
          "date" -> "2019-04-03T02:13:37+0000",
          "user" -> "user",
          "amount" -> 200,
          "balance" -> 300,
          "status" -> Option.empty[String]
        ),
        Json.obj(
          "id" -> 3,
          "date" -> "2019-03-27T02:13:37+0000",
          "user" -> "user",
          "amount" -> -100,
          "balance" -> 100,
          "status" -> Option.empty[String]
        ),
        Json.obj(
          "id" -> 2,
          "date" -> "2019-03-27T02:13:37+0000",
          "user" -> "user",
          "amount" -> 100,
          "balance" -> 200,
          "status" -> Option.empty[String]
        ),
        Json.obj(
          "id" -> 1,
          "date" -> "2019-03-20T02:13:37+0000",
          "user" -> "user",
          "amount" -> 100,
          "balance" -> 100,
          "status" -> Option.empty[String]
        )
    )
    Ok(Json.toJson(mockData))
  }
  def updateTransaction() = Action { implicit request: Request[AnyContent] =>
    Ok("")
  }
}