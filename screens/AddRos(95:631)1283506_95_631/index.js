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
      <View style={styles.View_95_308} />
      <View style={styles.View_95_309}>
        <Text style={styles.Text_95_309}>Constitutional (Gen)</Text>
      </View>
      <View style={styles.View_95_500}>
        <Text style={styles.Text_95_500}>Genutourinary (GU)</Text>
      </View>
      <View style={styles.View_95_557}>
        <Text style={styles.Text_95_557}>Musculoskeletal (MSK)</Text>
      </View>
      <View style={styles.View_95_615}>
        <Text style={styles.Text_95_615}>Psychiatric</Text>
      </View>
      <View style={styles.View_95_586}>
        <Text style={styles.Text_95_586}>Neurological (CNS)</Text>
      </View>
      <View style={styles.View_95_392}>
        <Text style={styles.Text_95_392}>
          Head, Ears, Eyes, Nose, Throat (HEENT)
        </Text>
      </View>
      <View style={styles.View_95_428}>
        <Text style={styles.Text_95_428}>Gastrointestinal (GI)</Text>
      </View>
      <View style={styles.View_95_464}>
        <Text style={styles.Text_95_464}>Skin</Text>
      </View>
      <View style={styles.View_95_341}>
        <Text style={styles.Text_95_341}>Cardiovascular (CV)</Text>
      </View>
      <View style={styles.View_95_370}>
        <Text style={styles.Text_95_370}>Respiratory (Resp)</Text>
      </View>
      <View style={styles.View_95_311}>
        <Text style={styles.Text_95_311}>Fatigue</Text>
      </View>
      <View style={styles.View_95_501}>
        <Text style={styles.Text_95_501}>Dysuria</Text>
      </View>
      <View style={styles.View_95_558}>
        <Text style={styles.Text_95_558}>Joint pain</Text>
      </View>
      <View style={styles.View_95_616}>
        <Text style={styles.Text_95_616}>Anxiety</Text>
      </View>
      <View style={styles.View_95_587}>
        <Text style={styles.Text_95_587}>Headache</Text>
      </View>
      <View style={styles.View_95_393}>
        <Text style={styles.Text_95_393}>Sore throat</Text>
      </View>
      <View style={styles.View_95_429}>
        <Text style={styles.Text_95_429}>Nausea</Text>
      </View>
      <View style={styles.View_95_465}>
        <Text style={styles.Text_95_465}>Rash</Text>
      </View>
      <View style={styles.View_95_342}>
        <Text style={styles.Text_95_342}>Chest Pains</Text>
      </View>
      <View style={styles.View_95_371}>
        <Text style={styles.Text_95_371}>Shortness of breath</Text>
      </View>
      <View style={styles.View_95_312}>
        <Text style={styles.Text_95_312}>Fever</Text>
      </View>
      <View style={styles.View_95_502}>
        <Text style={styles.Text_95_502}>Frequency</Text>
      </View>
      <View style={styles.View_95_559}>
        <Text style={styles.Text_95_559}>Back pain</Text>
      </View>
      <View style={styles.View_95_617}>
        <Text style={styles.Text_95_617}>Depression</Text>
      </View>
      <View style={styles.View_95_588}>
        <Text style={styles.Text_95_588}>Dizziness</Text>
      </View>
      <View style={styles.View_95_394}>
        <Text style={styles.Text_95_394}>Congestion</Text>
      </View>
      <View style={styles.View_95_430}>
        <Text style={styles.Text_95_430}>Vomiting</Text>
      </View>
      <View style={styles.View_95_466}>
        <Text style={styles.Text_95_466}>Wound</Text>
      </View>
      <View style={styles.View_95_343}>
        <Text style={styles.Text_95_343}>Palpitations</Text>
      </View>
      <View style={styles.View_95_372}>
        <Text style={styles.Text_95_372}>Cough</Text>
      </View>
      <View style={styles.View_95_313}>
        <Text style={styles.Text_95_313}>Chills</Text>
      </View>
      <View style={styles.View_95_503}>
        <Text style={styles.Text_95_503}>Urgency</Text>
      </View>
      <View style={styles.View_95_589}>
        <Text style={styles.Text_95_589}>Ataxia</Text>
      </View>
      <View style={styles.View_95_395}>
        <Text style={styles.Text_95_395}>Blurred vision</Text>
      </View>
      <View style={styles.View_95_431}>
        <Text style={styles.Text_95_431}>Diarrhea</Text>
      </View>
      <View style={styles.View_95_467}>
        <Text style={styles.Text_95_467}>Lesions</Text>
      </View>
      <View style={styles.View_95_344}>
        <Text style={styles.Text_95_344}>Leg Eldema</Text>
      </View>
      <View style={styles.View_95_373}>
        <Text style={styles.Text_95_373}>Wheezing</Text>
      </View>
      <View style={styles.View_95_314}>
        <Text style={styles.Text_95_314}>Appetite loss</Text>
      </View>
      <View style={styles.View_95_504}>
        <Text style={styles.Text_95_504}>Discharge</Text>
      </View>
      <View style={styles.View_95_590}>
        <Text style={styles.Text_95_590}>Memory loss</Text>
      </View>
      <View style={styles.View_95_396}>
        <Text style={styles.Text_95_396}>Ear ache</Text>
      </View>
      <View style={styles.View_95_432}>
        <Text style={styles.Text_95_432}>Constipation</Text>
      </View>
      <View style={styles.View_95_421}>
        <Text style={styles.Text_95_421}>Hoarseness</Text>
      </View>
      <View style={styles.View_95_433}>
        <Text style={styles.Text_95_433}>Abdominal pain</Text>
      </View>
      <View style={styles.View_95_322}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/111fc3e4-ae0c-4462-9740-e7c40f6152c4"
          }}
          style={styles.ImageBackground_95_317}
        />
      </View>
      <View style={styles.View_95_505}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/01de804f-2334-4dff-8c82-b4f710a2168d"
          }}
          style={styles.ImageBackground_95_506}
        />
      </View>
      <View style={styles.View_95_562}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/00be892e-2a57-4616-a24f-9161ee2f7877"
          }}
          style={styles.ImageBackground_95_563}
        />
      </View>
      <View style={styles.View_95_618}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a9dcc507-611f-4e76-b985-17d46c1a3cad"
          }}
          style={styles.ImageBackground_95_619}
        />
      </View>
      <View style={styles.View_95_591}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d6cd94a6-cca5-4aa4-b25d-b97b6e248673"
          }}
          style={styles.ImageBackground_95_592}
        />
      </View>
      <View style={styles.View_95_397}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/28a28b9a-57ac-4534-9e93-7d10383d46d3"
          }}
          style={styles.ImageBackground_95_398}
        />
      </View>
      <View style={styles.View_95_434}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/30b8ae6c-dd22-417f-b044-598c018fb206"
          }}
          style={styles.ImageBackground_95_435}
        />
      </View>
      <View style={styles.View_95_470}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8e5a7012-c0b3-4c73-a5d9-e271f2f14dbc"
          }}
          style={styles.ImageBackground_95_471}
        />
      </View>
      <View style={styles.View_95_346}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/45d80f17-6f42-48cc-8047-94c6d3fc6042"
          }}
          style={styles.ImageBackground_95_347}
        />
      </View>
      <View style={styles.View_95_374}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e6d77668-a8dd-4c9e-a545-1a760b922efe"
          }}
          style={styles.ImageBackground_95_375}
        />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_95_323}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("82_384"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aa876138-3343-4e01-8838-bed1ca5993eb"
          }}
          style={styles.ImageBackground_95_324}
        />
      </TouchableOpacity>
      <View style={styles.View_95_511}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/65fc702b-0a92-434f-9a9d-ca283523c248"
          }}
          style={styles.ImageBackground_95_512}
        />
      </View>
      <View style={styles.View_95_568}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/43f303ca-4681-4b49-84ee-3eabf0a90e32"
          }}
          style={styles.ImageBackground_95_569}
        />
      </View>
      <View style={styles.View_95_624}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1a70a03-f205-40f5-bd51-de5ddcd63ffd"
          }}
          style={styles.ImageBackground_95_625}
        />
      </View>
      <View style={styles.View_95_597}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ba4abc16-9fad-4641-9b0f-44a2c7868a69"
          }}
          style={styles.ImageBackground_95_598}
        />
      </View>
      <View style={styles.View_95_403}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7e199319-848f-47c4-9f14-13a02be2b674"
          }}
          style={styles.ImageBackground_95_404}
        />
      </View>
      <View style={styles.View_95_440}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c651499f-56c2-4209-99eb-d3779a3dc46f"
          }}
          style={styles.ImageBackground_95_441}
        />
      </View>
      <View style={styles.View_95_476}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cfe9960b-c7ab-4837-99af-e99c42cb8b79"
          }}
          style={styles.ImageBackground_95_477}
        />
      </View>
      <View style={styles.View_95_352}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1a271696-8f39-412e-9a0b-8d658823fd47"
          }}
          style={styles.ImageBackground_95_353}
        />
      </View>
      <View style={styles.View_95_380}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/771dd58e-8cda-460b-b46e-164d52160d4d"
          }}
          style={styles.ImageBackground_95_381}
        />
      </View>
      <View style={styles.View_95_329}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/045672d3-685f-475e-a888-04e123009998"
          }}
          style={styles.ImageBackground_95_330}
        />
      </View>
      <View style={styles.View_95_517}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/72935a9f-73c3-47cd-8bb1-527595d34f0b"
          }}
          style={styles.ImageBackground_95_518}
        />
      </View>
      <View style={styles.View_95_603}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5947bb97-3c6a-4c80-aeae-435bc290d1ae"
          }}
          style={styles.ImageBackground_95_604}
        />
      </View>
      <View style={styles.View_95_409}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d899b1d-bed3-4575-a740-9c28b0c8c744"
          }}
          style={styles.ImageBackground_95_410}
        />
      </View>
      <View style={styles.View_95_446}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3ed8fcdd-6c8d-4558-a3f3-4e8cc3f0cbbb"
          }}
          style={styles.ImageBackground_95_447}
        />
      </View>
      <View style={styles.View_95_482}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ea2353d1-6907-4306-acd3-d9f474efc640"
          }}
          style={styles.ImageBackground_95_483}
        />
      </View>
      <View style={styles.View_95_358}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2ca1f90e-100f-4563-bdf9-1421de8a0a23"
          }}
          style={styles.ImageBackground_95_359}
        />
      </View>
      <View style={styles.View_95_386}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3fe5a75d-8376-4dae-bf6f-2b4ac4a32946"
          }}
          style={styles.ImageBackground_95_387}
        />
      </View>
      <View style={styles.View_95_335}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0e1536d4-a9a2-4c46-9b6a-c3ca012e9d7c"
          }}
          style={styles.ImageBackground_95_336}
        />
      </View>
      <View style={styles.View_95_523}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4526cdb1-ee36-44f0-a2b1-eb59376f8655"
          }}
          style={styles.ImageBackground_95_524}
        />
      </View>
      <View style={styles.View_95_609}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1e309cf7-67f5-4277-8e79-6bdc435e23f4"
          }}
          style={styles.ImageBackground_95_610}
        />
      </View>
      <View style={styles.View_95_415}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/897893a5-5f84-4ee5-b67e-ee15af3ddb09"
          }}
          style={styles.ImageBackground_95_416}
        />
      </View>
      <View style={styles.View_95_452}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4052bd78-24d7-4557-9fec-78156d4313c0"
          }}
          style={styles.ImageBackground_95_453}
        />
      </View>
      <View style={styles.View_95_422}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/469bc06e-bf0f-41db-9133-983508156d37"
          }}
          style={styles.ImageBackground_95_423}
        />
      </View>
      <View style={styles.View_95_458}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fde0251f-101c-4cf1-be1e-4a9151d61e94"
          }}
          style={styles.ImageBackground_95_459}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  View_95_308: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("306%"),
    minHeight: hp("306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_95_309: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_95_309: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_500: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("196%"),
    justifyContent: "flex-start"
  },
  Text_95_500: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_557: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("228%"),
    justifyContent: "flex-start"
  },
  Text_95_557: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_615: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("282%"),
    justifyContent: "flex-start"
  },
  Text_95_615: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_586: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("249%"),
    justifyContent: "flex-start"
  },
  Text_95_586: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_392: {
    width: wp("75%"),
    minWidth: wp("75%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("93%"),
    justifyContent: "flex-start"
  },
  Text_95_392: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_428: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("131%"),
    justifyContent: "flex-start"
  },
  Text_95_428: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_464: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("169%"),
    justifyContent: "flex-start"
  },
  Text_95_464: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_341: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("39%"),
    justifyContent: "flex-start"
  },
  Text_95_341: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_370: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("66%"),
    justifyContent: "flex-start"
  },
  Text_95_370: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_311: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_95_311: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_501: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("203%"),
    justifyContent: "flex-start"
  },
  Text_95_501: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_558: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("235%"),
    justifyContent: "flex-start"
  },
  Text_95_558: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_616: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("289%"),
    justifyContent: "flex-start"
  },
  Text_95_616: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_587: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("256%"),
    justifyContent: "flex-start"
  },
  Text_95_587: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_393: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("100%"),
    justifyContent: "flex-start"
  },
  Text_95_393: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_429: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("138%"),
    justifyContent: "flex-start"
  },
  Text_95_429: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_465: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("176%"),
    justifyContent: "flex-start"
  },
  Text_95_465: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_342: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("46%"),
    justifyContent: "flex-start"
  },
  Text_95_342: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_371: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("73%"),
    justifyContent: "flex-start"
  },
  Text_95_371: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_312: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_95_312: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_502: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("208%"),
    justifyContent: "flex-start"
  },
  Text_95_502: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_559: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("241%"),
    justifyContent: "flex-start"
  },
  Text_95_559: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_617: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("294%"),
    justifyContent: "flex-start"
  },
  Text_95_617: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_588: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("262%"),
    justifyContent: "flex-start"
  },
  Text_95_588: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_394: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("105%"),
    justifyContent: "flex-start"
  },
  Text_95_394: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_430: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("143%"),
    justifyContent: "flex-start"
  },
  Text_95_430: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_466: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("181%"),
    justifyContent: "flex-start"
  },
  Text_95_466: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_343: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("52%"),
    justifyContent: "flex-start"
  },
  Text_95_343: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_372: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("79%"),
    justifyContent: "flex-start"
  },
  Text_95_372: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_313: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_95_313: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_503: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("214%"),
    justifyContent: "flex-start"
  },
  Text_95_503: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_589: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("267%"),
    justifyContent: "flex-start"
  },
  Text_95_589: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_395: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("111%"),
    justifyContent: "flex-start"
  },
  Text_95_395: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_431: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("149%"),
    justifyContent: "flex-start"
  },
  Text_95_431: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_467: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("187%"),
    justifyContent: "flex-start"
  },
  Text_95_467: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_344: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("57%"),
    justifyContent: "flex-start"
  },
  Text_95_344: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_373: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("84%"),
    justifyContent: "flex-start"
  },
  Text_95_373: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_314: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("30%"),
    justifyContent: "flex-start"
  },
  Text_95_314: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_504: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("219%"),
    justifyContent: "flex-start"
  },
  Text_95_504: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_590: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("273%"),
    justifyContent: "flex-start"
  },
  Text_95_590: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_396: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("116%"),
    justifyContent: "flex-start"
  },
  Text_95_396: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_432: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("154%"),
    justifyContent: "flex-start"
  },
  Text_95_432: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_421: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("122%"),
    justifyContent: "flex-start"
  },
  Text_95_421: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_433: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("160%"),
    justifyContent: "flex-start"
  },
  Text_95_433: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_322: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("14%")
  },
  ImageBackground_95_317: {
    width: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_95_505: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("203%")
  },
  ImageBackground_95_506: {
    width: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_95_562: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("235%")
  },
  ImageBackground_95_563: {
    width: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_95_618: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("289%")
  },
  ImageBackground_95_619: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_95_591: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("257%")
  },
  ImageBackground_95_592: {
    width: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_95_397: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("100%")
  },
  ImageBackground_95_398: {
    width: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_95_434: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("138%")
  },
  ImageBackground_95_435: {
    width: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_95_470: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("176%")
  },
  ImageBackground_95_471: {
    width: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_95_346: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("46%")
  },
  ImageBackground_95_347: {
    width: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_95_374: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("73%")
  },
  ImageBackground_95_375: {
    width: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  TouchableOpacity_95_323: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("19%")
  },
  ImageBackground_95_324: {
    width: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_95_511: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("208%")
  },
  ImageBackground_95_512: {
    width: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_95_568: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("241%")
  },
  ImageBackground_95_569: {
    width: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_95_624: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("295%")
  },
  ImageBackground_95_625: {
    width: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_95_597: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("262%")
  },
  ImageBackground_95_598: {
    width: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_95_403: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("105%")
  },
  ImageBackground_95_404: {
    width: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_95_440: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("144%")
  },
  ImageBackground_95_441: {
    width: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_95_476: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("181%")
  },
  ImageBackground_95_477: {
    width: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_95_352: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("52%")
  },
  ImageBackground_95_353: {
    width: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_95_380: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("79%")
  },
  ImageBackground_95_381: {
    width: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_95_329: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("25%")
  },
  ImageBackground_95_330: {
    width: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_95_517: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("214%")
  },
  ImageBackground_95_518: {
    width: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_95_603: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("267%")
  },
  ImageBackground_95_604: {
    width: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_95_409: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("111%")
  },
  ImageBackground_95_410: {
    width: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_95_446: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("149%")
  },
  ImageBackground_95_447: {
    width: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_95_482: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("187%")
  },
  ImageBackground_95_483: {
    width: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_95_358: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("57%")
  },
  ImageBackground_95_359: {
    width: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_95_386: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("84%")
  },
  ImageBackground_95_387: {
    width: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_95_335: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("30%")
  },
  ImageBackground_95_336: {
    width: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_95_523: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("219%")
  },
  ImageBackground_95_524: {
    width: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_95_609: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("273%")
  },
  ImageBackground_95_610: {
    width: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_95_415: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("116%")
  },
  ImageBackground_95_416: {
    width: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_95_452: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("154%")
  },
  ImageBackground_95_453: {
    width: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_95_422: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("122%")
  },
  ImageBackground_95_423: {
    width: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_95_458: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("160%")
  },
  ImageBackground_95_459: {
    width: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
