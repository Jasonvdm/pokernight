package controllers

import javax.inject.{Inject, Singleton}
import play.api.libs.json._
import play.api.libs.functional.syntax._
import play.api.mvc._

@Singleton
class PlayerController @Inject()(cc: ControllerComponents) extends AbstractController(cc) {

  def getPlayer() = Action { implicit request: Request[AnyContent] =>
    val mockData = Json.obj(
      "statistics" -> Json.obj(
        "best" -> 500,
        "worst" -> -5000,
        "average" -> 200
      ),
      "transactions" -> Json.arr(
        Json.obj(
          "date" -> "2019-04-03T02:13:37+0000",
          "amount" -> 200,
          "balance" -> 300
        ),
        Json.obj(
          "date" -> "2019-03-27T02:13:37+0000",
          "amount" -> -100,
          "balance" -> 100
        ),
        Json.obj(
          "date" -> "2019-03-27T02:13:37+0000",
          "amount" -> 100,
          "balance" -> 200
        ),
        Json.obj(
          "date" -> "2019-03-20T02:13:37+0000",
          "amount" -> 100,
          "balance" -> 100
        )
      )
    )
    Ok(Json.toJson(mockData))
  }
}