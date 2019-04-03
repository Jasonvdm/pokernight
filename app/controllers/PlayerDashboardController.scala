package controllers

import javax.inject.{Inject, Singleton}
import play.api.libs.json._
import play.api.libs.functional.syntax._
import play.api.mvc._

@Singleton
class PlayerDashboardController @Inject()(cc: ControllerComponents) extends AbstractController(cc) {

  def getPlayerDashboard() = Action { implicit request: Request[AnyContent] =>
    var mockData = Json.obj(
      "balance" -> 100,
      "statistics" -> Json.obj(
        "best" -> 500,
        "worst" -> -5000,
        "average" -> 200
      ),
      "transactions" -> Json.arr(
        Json.obj(
          "date" -> "2019-04-03T02:13:37+0000",
          "amount" -> 100,
          "total" -> 1000
        )
      )
    )
    Ok(Json.toJson(mockData))
  }
}