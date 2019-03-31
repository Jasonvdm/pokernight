// @GENERATOR:play-routes-compiler
// @SOURCE:/Users/json/Development/pokernight/conf/routes
// @DATE:Sun Mar 31 15:33:45 PDT 2019


package router {
  object RoutesPrefix {
    private var _prefix: String = "/"
    def setPrefix(p: String): Unit = {
      _prefix = p
    }
    def prefix: String = _prefix
    val byNamePrefix: Function0[String] = { () => prefix }
  }
}
