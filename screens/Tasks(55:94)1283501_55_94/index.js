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
      <View style={styles.View_55_116}>
        <View style={styles.View_55_117} />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/529d1ebf-5ff5-493d-b79a-5f9941f7c84a"
          }}
          style={styles.TouchableOpacity_182_77}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("183_81"))
          }
        />
        <View style={styles.View_55_125}>
          <Text style={styles.Text_55_125}>Tasks (Today)</Text>
        </View>
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a71a5de7-6299-4b61-80ec-082b98e74ae2"
          }}
          style={styles.TouchableOpacity_55_138}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("140_1097"))
          }
        />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_140_1092}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("140_932"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e3fd35dd-9c2d-41f5-a67b-622d01b29e44"
          }}
          style={styles.ImageBackground_55_128}
        />
        <View style={styles.View_55_93}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7d954098-67a0-49e6-b868-b20d5c7aba6b"
            }}
            style={styles.ImageBackground_55_87}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_140_660}>
        <View style={styles.View_140_661} />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c1281181-b4ba-4e88-a774-d962ff4f8f8d"
          }}
          style={styles.TouchableOpacity_140_662}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("48_2"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/161254c3-da36-4e9a-a169-4564a899580f"
          }}
          style={styles.TouchableOpacity_140_664}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("112_562"))
          }
        />
        <View style={styles.View_140_666}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/54c10159-4f10-47ae-9af4-d09f9a5c67ec"
            }}
            style={styles.ImageBackground_140_667}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/86348319-43fa-4f2c-aaf6-f998eef1081a"
            }}
            style={styles.ImageBackground_140_669}
          />
        </View>
      </View>
      <View style={styles.View_140_777}>
        <View style={styles.View_140_778} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3b4aa23a-2281-4b7b-912b-64fa7dbaa226"
          }}
          style={styles.ImageBackground_140_864}
        />
        <View style={styles.View_140_807}>
          <Text style={styles.Text_140_807}>
            Collect his blood samples back from the lab
          </Text>
        </View>
        <View style={styles.View_184_317}>
          <Text style={styles.Text_184_317}>ED | ED11</Text>
        </View>
        <View style={styles.View_140_779}>
          <Text style={styles.Text_140_779}>Jackson. K</Text>
        </View>
        <View style={styles.View_140_783}>
          <Text style={styles.Text_140_783}>14:56</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7b544c37-429f-4e33-a322-899faec06f07"
          }}
          style={styles.ImageBackground_140_1044}
        />
      </View>
      <View style={styles.View_140_847}>
        <View style={styles.View_140_848} />
        <View style={styles.View_184_318}>
          <Text style={styles.Text_184_318}>5th | 525-2</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/36c74253-71f3-4c12-bb57-691dfd526b2a"
          }}
          style={styles.ImageBackground_140_849}
        />
        <View style={styles.View_140_853}>
          <Text style={styles.Text_140_853}>
            Collect his blood samples back from the lab
          </Text>
        </View>
        <View style={styles.View_140_854}>
          <Text style={styles.Text_140_854}>Jackson. K</Text>
        </View>
        <View style={styles.View_140_855}>
          <Text style={styles.Text_140_855}>14:56</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8860a8ce-0b3f-439b-aa47-1c4ed44768ee"
          }}
          style={styles.ImageBackground_140_1080}
        />
      </View>
      <View style={styles.View_140_830}>
        <View style={styles.View_140_831} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/49f259fe-c8ed-4db1-bee6-9ffeb9d41410"
          }}
          style={styles.ImageBackground_140_844}
        />
        <View style={styles.View_140_836}>
          <Text style={styles.Text_140_836}>
            Go to the pharmacy to buy some pills
          </Text>
        </View>
        <View style={styles.View_140_837}>
          <Text style={styles.Text_140_837}>Random Task</Text>
        </View>
        <View style={styles.View_140_838}>
          <Text style={styles.Text_140_838}>14:56</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/59cff6e4-a524-435a-ab71-f07303726cd1"
          }}
          style={styles.ImageBackground_140_1062}
        />
      </View>
      <View style={styles.View_184_546}>
        <View style={styles.View_184_539} />
        <View style={styles.View_184_543}>
          <View style={styles.View_184_540} />
          <View style={styles.View_184_535}>
            <Text style={styles.Text_184_535}>All</Text>
          </View>
        </View>
        <View style={styles.View_184_545}>
          <View style={styles.View_184_537}>
            <Text style={styles.Text_184_537}>Completed</Text>
          </View>
        </View>
        <View style={styles.View_184_544}>
          <View style={styles.View_184_538}>
            <Text style={styles.Text_184_538}>Pending</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(244, 247, 253, 1)" },
  View_2: { height: hp("155%") },
  View_55_116: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_55_117: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_182_77: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%")
  },
  View_55_125: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_55_125: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_55_138: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  TouchableOpacity_140_1092: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("123%")
  },
  ImageBackground_55_128: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_55_93: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%")
  },
  ImageBackground_55_87: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_140_660: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("138%")
  },
  View_140_661: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_140_662: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  TouchableOpacity_140_664: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%")
  },
  View_140_666: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("5%")
  },
  ImageBackground_140_667: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_140_669: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_140_777: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("34%")
  },
  View_140_778: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_140_864: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  View_140_807: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_140_807: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_184_317: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_184_317: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_779: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_140_779: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_783: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_140_783: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_140_1044: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_140_847: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("34%")
  },
  View_140_848: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_184_318: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_184_318: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_140_849: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  View_140_853: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_140_853: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_854: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_140_854: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_855: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_140_855: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_140_1080: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_140_830: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("34%")
  },
  View_140_831: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_140_844: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  View_140_836: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_140_836: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_837: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_140_837: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_838: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_140_838: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_140_1062: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_184_546: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%")
  },
  View_184_539: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_184_543: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_184_540: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  View_184_535: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_184_535: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_184_545: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("5%")
  },
  View_184_537: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_184_537: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_184_544: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("5%")
  },
  View_184_538: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_184_538: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
