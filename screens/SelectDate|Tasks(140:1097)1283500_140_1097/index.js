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
      <View style={styles.View_140_1098}>
        <View style={styles.View_140_1099} />
        <View style={styles.View_140_1100}>
          <Text style={styles.Text_140_1100}>Mon</Text>
        </View>
        <View style={styles.View_140_1101}>
          <Text style={styles.Text_140_1101}>27</Text>
        </View>
        <View style={styles.View_140_1102}>
          <Text style={styles.Text_140_1102}>28</Text>
        </View>
        <View style={styles.View_140_1103}>
          <Text style={styles.Text_140_1103}>29</Text>
        </View>
        <View style={styles.View_140_1104}>
          <Text style={styles.Text_140_1104}>30</Text>
        </View>
        <View style={styles.View_140_1105}>
          <Text style={styles.Text_140_1105}>1</Text>
        </View>
        <View style={styles.View_140_1106}>
          <Text style={styles.Text_140_1106}>2</Text>
        </View>
        <View style={styles.View_140_1107}>
          <Text style={styles.Text_140_1107}>3</Text>
        </View>
        <View style={styles.View_140_1108}>
          <Text style={styles.Text_140_1108}>5</Text>
        </View>
        <View style={styles.View_140_1109}>
          <Text style={styles.Text_140_1109}>6</Text>
        </View>
        <View style={styles.View_140_1110}>
          <Text style={styles.Text_140_1110}>7</Text>
        </View>
        <View style={styles.View_140_1111}>
          <Text style={styles.Text_140_1111}>8</Text>
        </View>
        <View style={styles.View_140_1112}>
          <Text style={styles.Text_140_1112}>11</Text>
        </View>
        <View style={styles.View_140_1113}>
          <Text style={styles.Text_140_1113}>12</Text>
        </View>
        <View style={styles.View_140_1114}>
          <Text style={styles.Text_140_1114}>13</Text>
        </View>
        <View style={styles.View_140_1115}>
          <Text style={styles.Text_140_1115}>14</Text>
        </View>
        <View style={styles.View_140_1116}>
          <Text style={styles.Text_140_1116}>15</Text>
        </View>
        <View style={styles.View_140_1117}>
          <Text style={styles.Text_140_1117}>16</Text>
        </View>
        <View style={styles.View_140_1118}>
          <Text style={styles.Text_140_1118}>17</Text>
        </View>
        <View style={styles.View_140_1119}>
          <Text style={styles.Text_140_1119}>18</Text>
        </View>
        <View style={styles.View_140_1120}>
          <Text style={styles.Text_140_1120}>19</Text>
        </View>
        <View style={styles.View_140_1121}>
          <Text style={styles.Text_140_1121}>20</Text>
        </View>
        <View style={styles.View_140_1122}>
          <Text style={styles.Text_140_1122}>21</Text>
        </View>
        <View style={styles.View_140_1123}>
          <Text style={styles.Text_140_1123}>22</Text>
        </View>
        <View style={styles.View_140_1124}>
          <Text style={styles.Text_140_1124}>23</Text>
        </View>
        <View style={styles.View_140_1125}>
          <Text style={styles.Text_140_1125}>24</Text>
        </View>
        <View style={styles.View_140_1126}>
          <Text style={styles.Text_140_1126}>25</Text>
        </View>
        <View style={styles.View_140_1127}>
          <Text style={styles.Text_140_1127}>26</Text>
        </View>
        <View style={styles.View_140_1128}>
          <Text style={styles.Text_140_1128}>27</Text>
        </View>
        <View style={styles.View_140_1129}>
          <Text style={styles.Text_140_1129}>28</Text>
        </View>
        <View style={styles.View_140_1130}>
          <Text style={styles.Text_140_1130}>29</Text>
        </View>
        <View style={styles.View_140_1131}>
          <Text style={styles.Text_140_1131}>30</Text>
        </View>
        <View style={styles.View_140_1132}>
          <Text style={styles.Text_140_1132}>31</Text>
        </View>
        <View style={styles.View_140_1133}>
          <Text style={styles.Text_140_1133}>Tue</Text>
        </View>
        <View style={styles.View_140_1134}>
          <Text style={styles.Text_140_1134}>Wed</Text>
        </View>
        <View style={styles.View_140_1135}>
          <Text style={styles.Text_140_1135}>Thur</Text>
        </View>
        <View style={styles.View_140_1136}>
          <Text style={styles.Text_140_1136}>Fri</Text>
        </View>
        <View style={styles.View_140_1137}>
          <Text style={styles.Text_140_1137}>Sat</Text>
        </View>
        <View style={styles.View_140_1138}>
          <Text style={styles.Text_140_1138}>Sun</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_140_1141}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("55_94"))
          }
        >
          <View style={styles.View_140_1142}>
            <Text style={styles.Text_140_1142}>4</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d1190790-e346-4479-9898-bfd86d05bfd3"
            }}
            style={styles.ImageBackground_140_1143}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_140_1144}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("140_867"))
          }
        >
          <View style={styles.View_140_1145}>
            <Text style={styles.Text_140_1145}>9</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cf9d5a28-6495-41cb-a2e2-1ab0ad3c1b03"
            }}
            style={styles.ImageBackground_140_1146}
          />
        </TouchableOpacity>
        <View style={styles.View_140_1148}>
          <Text style={styles.Text_140_1148}>JULY 2022</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/75d4c176-6ad6-4568-8e79-f004bec48d56"
          }}
          style={styles.ImageBackground_140_1149}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f93f278c-58a3-4161-82f4-c4edafd73f0c"
          }}
          style={styles.ImageBackground_140_1150}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e8fdef5c-d39e-402a-8c23-dbdeac98cd0c"
          }}
          style={styles.ImageBackground_140_1151}
        />
        <View style={styles.View_140_1152}>
          <Text style={styles.Text_140_1152}>Select Date</Text>
        </View>
        <View style={styles.View_140_1153}>
          <Text style={styles.Text_140_1153}>10</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("120%") },
  View_140_1098: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("120%"),
    minHeight: hp("120%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_140_1099: {
    width: wp("100%"),
    height: hp("120%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_140_1100: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("35%"),
    justifyContent: "flex-start"
  },
  Text_140_1100: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_1101: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("47%"),
    justifyContent: "flex-start"
  },
  Text_140_1101: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_1102: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("47%"),
    justifyContent: "flex-start"
  },
  Text_140_1102: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_1103: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("47%"),
    justifyContent: "flex-start"
  },
  Text_140_1103: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_1104: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("47%"),
    justifyContent: "flex-start"
  },
  Text_140_1104: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_1105: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("47%"),
    justifyContent: "flex-start"
  },
  Text_140_1105: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_1106: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("47%"),
    justifyContent: "flex-start"
  },
  Text_140_1106: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_1107: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("47%"),
    justifyContent: "flex-start"
  },
  Text_140_1107: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_1108: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("59%"),
    justifyContent: "flex-start"
  },
  Text_140_1108: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_1109: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("59%"),
    justifyContent: "flex-start"
  },
  Text_140_1109: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_1110: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("59%"),
    justifyContent: "flex-start"
  },
  Text_140_1110: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_1111: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("59%"),
    justifyContent: "flex-start"
  },
  Text_140_1111: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_1112: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("71%"),
    justifyContent: "flex-start"
  },
  Text_140_1112: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_1113: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("71%"),
    justifyContent: "flex-start"
  },
  Text_140_1113: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_1114: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("71%"),
    justifyContent: "flex-start"
  },
  Text_140_1114: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_1115: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("71%"),
    justifyContent: "flex-start"
  },
  Text_140_1115: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_1116: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("71%"),
    justifyContent: "flex-start"
  },
  Text_140_1116: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_1117: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("71%"),
    justifyContent: "flex-start"
  },
  Text_140_1117: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_1118: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("71%"),
    justifyContent: "flex-start"
  },
  Text_140_1118: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_1119: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("83%"),
    justifyContent: "flex-start"
  },
  Text_140_1119: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_1120: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("83%"),
    justifyContent: "flex-start"
  },
  Text_140_1120: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_1121: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("83%"),
    justifyContent: "flex-start"
  },
  Text_140_1121: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_1122: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("83%"),
    justifyContent: "flex-start"
  },
  Text_140_1122: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_1123: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("83%"),
    justifyContent: "flex-start"
  },
  Text_140_1123: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_1124: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("83%"),
    justifyContent: "flex-start"
  },
  Text_140_1124: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_1125: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("83%"),
    justifyContent: "flex-start"
  },
  Text_140_1125: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_1126: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("96%"),
    justifyContent: "flex-start"
  },
  Text_140_1126: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_1127: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("96%"),
    justifyContent: "flex-start"
  },
  Text_140_1127: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_1128: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("96%"),
    justifyContent: "flex-start"
  },
  Text_140_1128: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_1129: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("96%"),
    justifyContent: "flex-start"
  },
  Text_140_1129: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_1130: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("96%"),
    justifyContent: "flex-start"
  },
  Text_140_1130: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_1131: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("96%"),
    justifyContent: "flex-start"
  },
  Text_140_1131: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_1132: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("96%"),
    justifyContent: "flex-start"
  },
  Text_140_1132: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_1133: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("35%"),
    justifyContent: "flex-start"
  },
  Text_140_1133: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_1134: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("35%"),
    justifyContent: "flex-start"
  },
  Text_140_1134: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_1135: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("35%"),
    justifyContent: "flex-start"
  },
  Text_140_1135: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_1136: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("35%"),
    justifyContent: "flex-start"
  },
  Text_140_1136: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_1137: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("35%"),
    justifyContent: "flex-start"
  },
  Text_140_1137: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_1138: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("35%"),
    justifyContent: "flex-start"
  },
  Text_140_1138: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_140_1141: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("59%")
  },
  View_140_1142: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_140_1142: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_140_1143: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("4%")
  },
  TouchableOpacity_140_1144: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("59%")
  },
  View_140_1145: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_140_1145: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_140_1146: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("4%")
  },
  View_140_1148: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_140_1148: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_140_1149: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("26%")
  },
  ImageBackground_140_1150: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("26%")
  },
  ImageBackground_140_1151: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("8%")
  },
  View_140_1152: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_140_1152: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_1153: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("59%"),
    justifyContent: "flex-start"
  },
  Text_140_1153: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
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
