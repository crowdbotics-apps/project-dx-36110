import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_15_302} />
      <View style={styles.View_15_303} />
      <View style={styles.View_15_304} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b7920583-01e2-41f3-84b0-fb0df57fcb43"
        }}
        style={styles.ImageBackground_26_446}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3148bd72-d42c-4a70-bb85-21b485ee162c"
        }}
        style={styles.ImageBackground_26_449}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/756cc428-fd7f-4910-a19d-38727168dfa1"
        }}
        style={styles.ImageBackground_26_447}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8545ee6c-3ce4-445e-8279-35e18f9d2cad"
        }}
        style={styles.ImageBackground_26_448}
      />
      <View style={styles.View_15_305}>
        <View style={styles.View_15_306} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/71e27b0f-9e2c-4eaa-8061-6960eea3b52e"
          }}
          style={styles.ImageBackground_15_307}
        />
        <View style={styles.View_15_309}>
          <Text style={styles.Text_15_309}>Search Patients</Text>
        </View>
      </View>
      <View style={styles.View_23_385}>
        <View style={styles.View_19_379} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cbd3685f-a651-4f42-9106-aba620013dfb"
          }}
          style={styles.ImageBackground_19_380}
        />
        <View style={styles.View_19_383}>
          <Text style={styles.Text_19_383}>Date</Text>
        </View>
        <View style={styles.View_19_384}>
          <Text style={styles.Text_19_384}>Room</Text>
        </View>
      </View>
      <View style={styles.View_15_310}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2c5e570c-6f30-4d66-af83-4673d9daf750"
          }}
          style={styles.ImageBackground_15_311}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ec234f67-0864-4487-b781-f027a7613c98"
          }}
          style={styles.ImageBackground_15_312}
        />
        <View style={styles.View_15_313}>
          <Text style={styles.Text_15_313}>HK</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9f404ba4-d972-4fda-8c8d-009047078439"
        }}
        style={styles.ImageBackground_15_314}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9a0b5b12-5693-4f2e-a05f-727d5a317a0d"
        }}
        style={styles.ImageBackground_15_317}
      />
      <View style={styles.View_15_318}>
        <View style={styles.View_15_319} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b363f7c5-35ea-447f-9f9d-38fd81ed5827"
          }}
          style={styles.ImageBackground_15_320}
        />
      </View>
      <View style={styles.View_15_321}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/082145b7-0ac6-4418-80d7-f94f3a72e999"
          }}
          style={styles.ImageBackground_15_322}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e38c571f-81e0-48b3-a203-d7a3702443cd"
        }}
        style={styles.ImageBackground_15_325}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d3752a0c-14bd-48e5-871e-39069b1d5765"
        }}
        style={styles.ImageBackground_15_327}
      />
      <View style={styles.View_15_329}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6f60636c-be31-4ff7-a542-645522358185"
          }}
          style={styles.ImageBackground_15_330}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/47c0f568-a8bb-4332-9277-56afd4d8049d"
        }}
        style={styles.ImageBackground_15_337}
      />
      <View style={styles.View_23_386}>
        <Text style={styles.Text_23_386}>JULY 2022</Text>
      </View>
      <View style={styles.View_26_396}>
        <Text style={styles.Text_26_396}>Mon</Text>
      </View>
      <View style={styles.View_26_405}>
        <Text style={styles.Text_26_405}>27</Text>
      </View>
      <View style={styles.View_26_410}>
        <Text style={styles.Text_26_410}>28</Text>
      </View>
      <View style={styles.View_26_415}>
        <Text style={styles.Text_26_415}>29</Text>
      </View>
      <View style={styles.View_26_420}>
        <Text style={styles.Text_26_420}>30</Text>
      </View>
      <View style={styles.View_26_425}>
        <Text style={styles.Text_26_425}>1</Text>
      </View>
      <View style={styles.View_26_430}>
        <Text style={styles.Text_26_430}>2</Text>
      </View>
      <View style={styles.View_26_435}>
        <Text style={styles.Text_26_435}>3</Text>
      </View>
      <View style={styles.View_26_406}>
        <Text style={styles.Text_26_406}>4</Text>
      </View>
      <View style={styles.View_26_411}>
        <Text style={styles.Text_26_411}>5</Text>
      </View>
      <View style={styles.View_26_416}>
        <Text style={styles.Text_26_416}>6</Text>
      </View>
      <View style={styles.View_26_421}>
        <Text style={styles.Text_26_421}>7</Text>
      </View>
      <View style={styles.View_26_426}>
        <Text style={styles.Text_26_426}>8</Text>
      </View>
      <View style={styles.View_26_431}>
        <Text style={styles.Text_26_431}>9</Text>
      </View>
      <View style={styles.View_26_436}>
        <Text style={styles.Text_26_436}>10</Text>
      </View>
      <View style={styles.View_26_407}>
        <Text style={styles.Text_26_407}>11</Text>
      </View>
      <View style={styles.View_26_412}>
        <Text style={styles.Text_26_412}>12</Text>
      </View>
      <View style={styles.View_26_417}>
        <Text style={styles.Text_26_417}>13</Text>
      </View>
      <View style={styles.View_26_422}>
        <Text style={styles.Text_26_422}>14</Text>
      </View>
      <View style={styles.View_26_427}>
        <Text style={styles.Text_26_427}>15</Text>
      </View>
      <View style={styles.View_26_432}>
        <Text style={styles.Text_26_432}>16</Text>
      </View>
      <View style={styles.View_26_437}>
        <Text style={styles.Text_26_437}>17</Text>
      </View>
      <View style={styles.View_26_408}>
        <Text style={styles.Text_26_408}>18</Text>
      </View>
      <View style={styles.View_26_413}>
        <Text style={styles.Text_26_413}>19</Text>
      </View>
      <View style={styles.View_26_418}>
        <Text style={styles.Text_26_418}>20</Text>
      </View>
      <View style={styles.View_26_423}>
        <Text style={styles.Text_26_423}>21</Text>
      </View>
      <View style={styles.View_26_428}>
        <Text style={styles.Text_26_428}>22</Text>
      </View>
      <View style={styles.View_26_433}>
        <Text style={styles.Text_26_433}>23</Text>
      </View>
      <View style={styles.View_26_438}>
        <Text style={styles.Text_26_438}>24</Text>
      </View>
      <View style={styles.View_26_409}>
        <Text style={styles.Text_26_409}>25</Text>
      </View>
      <View style={styles.View_26_414}>
        <Text style={styles.Text_26_414}>26</Text>
      </View>
      <View style={styles.View_26_419}>
        <Text style={styles.Text_26_419}>27</Text>
      </View>
      <View style={styles.View_26_424}>
        <Text style={styles.Text_26_424}>28</Text>
      </View>
      <View style={styles.View_26_429}>
        <Text style={styles.Text_26_429}>29</Text>
      </View>
      <View style={styles.View_26_434}>
        <Text style={styles.Text_26_434}>30</Text>
      </View>
      <View style={styles.View_26_439}>
        <Text style={styles.Text_26_439}>31</Text>
      </View>
      <View style={styles.View_26_399}>
        <Text style={styles.Text_26_399}>Tue</Text>
      </View>
      <View style={styles.View_26_400}>
        <Text style={styles.Text_26_400}>Wed</Text>
      </View>
      <View style={styles.View_26_401}>
        <Text style={styles.Text_26_401}>Thur</Text>
      </View>
      <View style={styles.View_26_402}>
        <Text style={styles.Text_26_402}>Fri</Text>
      </View>
      <View style={styles.View_26_403}>
        <Text style={styles.Text_26_403}>Sat</Text>
      </View>
      <View style={styles.View_26_404}>
        <Text style={styles.Text_26_404}>Sun</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/33ff4209-fdab-4b0d-af77-a6f07606cbdb"
        }}
        style={styles.ImageBackground_23_392}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a1d82ed2-a1be-412b-9873-5fb53c0fd137"
        }}
        style={styles.ImageBackground_26_397}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/db9c0751-37a3-4a63-a69c-1093fc2cc630"
        }}
        style={styles.ImageBackground_23_394}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(244, 247, 253, 1)" },
  View_2: { height: hp("102%") },
  View_15_302: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("14%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_15_303: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_15_304: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("102%"),
    minHeight: hp("102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_26_446: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("64%")
  },
  ImageBackground_26_449: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("64%")
  },
  ImageBackground_26_447: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("52%")
  },
  ImageBackground_26_448: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("64%")
  },
  View_15_305: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("3%")
  },
  View_15_306: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 247, 253, 1)"
  },
  ImageBackground_15_307: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  View_15_309: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_15_309: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_385: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("19%")
  },
  View_19_379: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 247, 253, 1)"
  },
  ImageBackground_19_380: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_19_383: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_19_383: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_384: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_19_384: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_310: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("15%")
  },
  ImageBackground_15_311: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_15_312: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_15_313: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_15_313: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_15_314: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%")
  },
  ImageBackground_15_317: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95%"),
    top: hp("3%")
  },
  View_15_318: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_15_319: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_15_320: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  View_15_321: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("49%")
  },
  ImageBackground_15_322: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_325: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_15_327: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_15_329: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("60%")
  },
  ImageBackground_15_330: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_337: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%")
  },
  View_23_386: {
    width: wp("9%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_23_386: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_396: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_26_396: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_405: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("40%"),
    justifyContent: "flex-start"
  },
  Text_26_405: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_410: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("40%"),
    justifyContent: "flex-start"
  },
  Text_26_410: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_415: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("40%"),
    justifyContent: "flex-start"
  },
  Text_26_415: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_420: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("40%"),
    justifyContent: "flex-start"
  },
  Text_26_420: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_425: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("40%"),
    justifyContent: "flex-start"
  },
  Text_26_425: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_430: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("40%"),
    justifyContent: "flex-start"
  },
  Text_26_430: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_435: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93%"),
    top: hp("40%"),
    justifyContent: "flex-start"
  },
  Text_26_435: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_406: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("53%"),
    justifyContent: "flex-start"
  },
  Text_26_406: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_411: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("53%"),
    justifyContent: "flex-start"
  },
  Text_26_411: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_416: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("53%"),
    justifyContent: "flex-start"
  },
  Text_26_416: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_421: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("53%"),
    justifyContent: "flex-start"
  },
  Text_26_421: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_426: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("53%"),
    justifyContent: "flex-start"
  },
  Text_26_426: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_431: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("53%"),
    justifyContent: "flex-start"
  },
  Text_26_431: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_436: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("53%"),
    justifyContent: "flex-start"
  },
  Text_26_436: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_407: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("65%"),
    justifyContent: "flex-start"
  },
  Text_26_407: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_412: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("65%"),
    justifyContent: "flex-start"
  },
  Text_26_412: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_417: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("65%"),
    justifyContent: "flex-start"
  },
  Text_26_417: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_422: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("65%"),
    justifyContent: "flex-start"
  },
  Text_26_422: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_427: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("65%"),
    justifyContent: "flex-start"
  },
  Text_26_427: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_432: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("65%"),
    justifyContent: "flex-start"
  },
  Text_26_432: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_437: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93%"),
    top: hp("65%"),
    justifyContent: "flex-start"
  },
  Text_26_437: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_408: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("78%"),
    justifyContent: "flex-start"
  },
  Text_26_408: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_413: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("78%"),
    justifyContent: "flex-start"
  },
  Text_26_413: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_418: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("78%"),
    justifyContent: "flex-start"
  },
  Text_26_418: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_423: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("78%"),
    justifyContent: "flex-start"
  },
  Text_26_423: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_428: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("78%"),
    justifyContent: "flex-start"
  },
  Text_26_428: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_433: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("78%"),
    justifyContent: "flex-start"
  },
  Text_26_433: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_438: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("78%"),
    justifyContent: "flex-start"
  },
  Text_26_438: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_409: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("90%"),
    justifyContent: "flex-start"
  },
  Text_26_409: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_414: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("90%"),
    justifyContent: "flex-start"
  },
  Text_26_414: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_419: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("90%"),
    justifyContent: "flex-start"
  },
  Text_26_419: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_424: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("90%"),
    justifyContent: "flex-start"
  },
  Text_26_424: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_429: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("90%"),
    justifyContent: "flex-start"
  },
  Text_26_429: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_434: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("90%"),
    justifyContent: "flex-start"
  },
  Text_26_434: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_439: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("90%"),
    justifyContent: "flex-start"
  },
  Text_26_439: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_399: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_26_399: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_400: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_26_400: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_401: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_26_401: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_402: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_26_402: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_403: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_26_403: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_404: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_26_404: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_23_392: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94%")
  },
  ImageBackground_26_397: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93%")
  },
  ImageBackground_23_394: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
