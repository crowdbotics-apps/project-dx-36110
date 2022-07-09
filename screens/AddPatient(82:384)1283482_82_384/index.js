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
      <View style={styles.View_126_809}>
        <View style={styles.View_82_444} />
        <View style={styles.View_134_89}>
          <Text style={styles.Text_134_89}>
            Traces of heamoglobin found Patient might have lumps in their
            enzymes close to the walls of the medulla No signs on Covid
            Monkeypox traces seen Red blood cells are blue No chemo improvements
          </Text>
        </View>
        <View style={styles.View_82_390}>
          <Text style={styles.Text_82_390}>Subjective</Text>
        </View>
      </View>
      <View style={styles.View_126_808}>
        <View style={styles.View_82_443} />
        <View style={styles.View_87_15}>
          <Text style={styles.Text_87_15}>Lab’s &amp; Vitals</Text>
        </View>
        <View style={styles.View_100_1423}>
          <Text style={styles.Text_100_1423}>Lab’s &amp; Vitals</Text>
        </View>
        <View style={styles.View_87_17}>
          <Text style={styles.Text_87_17}>
            Subjective is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#39;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with of clam kfankfa dkdfandkfk dfdfdd{" "}
          </Text>
        </View>
      </View>
      <View style={styles.View_134_83}>
        <View style={styles.View_134_84} />
        <View style={styles.View_134_85}>
          <Text style={styles.Text_134_85}>Lab’s &amp; Vitals</Text>
        </View>
        <View style={styles.View_134_86}>
          <Text style={styles.Text_134_86}>Lab’s &amp; Vitals</Text>
        </View>
      </View>
      <View style={styles.View_126_807}>
        <View style={styles.View_82_433} />
        <TouchableOpacity
          style={styles.TouchableOpacity_95_632}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("95_631"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb1572af-1d17-4377-94a8-0f23e99fdf45"
            }}
            style={styles.ImageBackground_95_633}
          />
        </TouchableOpacity>
        <View style={styles.View_95_301}>
          <Text style={styles.Text_95_301}>ROS</Text>
        </View>
        <View style={styles.View_100_1227}>
          <View style={styles.View_100_1224}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5163f4e4-584b-48ed-a7bf-e01eb41f83a0"
              }}
              style={styles.ImageBackground_95_307}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/683aa30e-9dca-4618-a814-66e12a128c0f"
              }}
              style={styles.ImageBackground_100_1154}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/60b29bd2-8ebe-4cf9-a879-2ac538655623"
              }}
              style={styles.ImageBackground_100_1156}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d737a881-cc01-4ef6-a29b-7747fd89895c"
              }}
              style={styles.ImageBackground_100_1158}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d5e27d6e-81e5-4322-92e8-41d8e83f3d15"
              }}
              style={styles.ImageBackground_100_1160}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/71cc467f-967e-48b1-bb74-d24d48c2f019"
              }}
              style={styles.ImageBackground_100_1162}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/65d61261-0595-4c2f-aba2-b9a02248cc56"
              }}
              style={styles.ImageBackground_100_1164}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f1647e30-f0c9-4701-ba2f-cd12c80cb77d"
              }}
              style={styles.ImageBackground_100_1166}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8b29d490-8d08-4fc7-b313-8d09672c1ed6"
              }}
              style={styles.ImageBackground_100_1168}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c6f9389b-bc82-4d1a-a4a1-f2a617408912"
              }}
              style={styles.ImageBackground_100_1170}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d0db6911-1c5c-481c-a8f7-27c312e52aca"
              }}
              style={styles.ImageBackground_100_1172}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a97b90eb-721b-4e00-9946-5c63de866d5b"
              }}
              style={styles.ImageBackground_100_1174}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1a57e170-23a0-4846-9392-febc59a2fe7b"
              }}
              style={styles.ImageBackground_100_1176}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/66d454e5-5225-4c38-952e-4580d041754e"
              }}
              style={styles.ImageBackground_100_1178}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a2131023-f617-42b0-a6a0-c05327259a48"
              }}
              style={styles.ImageBackground_100_1180}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fdc19591-4361-4fca-a4e4-c21abaf82376"
              }}
              style={styles.ImageBackground_100_1182}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7526da22-7328-449b-a17b-80bf9b20470a"
              }}
              style={styles.ImageBackground_100_1184}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3b4f73c3-b97c-4983-bd97-5d63131c8d2e"
              }}
              style={styles.ImageBackground_100_1186}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dee74dd7-5932-40a6-8178-45eda6bd8b57"
              }}
              style={styles.ImageBackground_100_1188}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6c028e02-bf4a-4f2b-a75c-d5a923cb6e73"
              }}
              style={styles.ImageBackground_100_1190}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c58cdf6e-ddae-44a2-8780-810b95f66ee3"
              }}
              style={styles.ImageBackground_100_1192}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dd11c175-e931-4860-b762-7eeebcaff5a0"
              }}
              style={styles.ImageBackground_100_1194}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6f06bc6c-7429-4097-840b-672d43597e65"
              }}
              style={styles.ImageBackground_100_1196}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2ca3e557-22b1-4819-8146-a35b98d37291"
              }}
              style={styles.ImageBackground_100_1198}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cfb8fbbe-6974-4d66-863d-b2abd7b0a3ed"
              }}
              style={styles.ImageBackground_100_1200}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb514b0c-ca24-4148-8cf7-34673e37e782"
              }}
              style={styles.ImageBackground_100_1202}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7d458624-1adc-47d9-b1f4-76a41d8c7a5c"
              }}
              style={styles.ImageBackground_100_1204}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/217bf9bf-a91c-430b-afc6-bca6402d1423"
              }}
              style={styles.ImageBackground_100_1206}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b9c08643-306b-48d6-b712-ef3a705162a9"
              }}
              style={styles.ImageBackground_100_1208}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/607635d3-c13d-433e-964e-df7a1850cb45"
              }}
              style={styles.ImageBackground_100_1210}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7f3d6f9f-5f1b-4b5d-9e06-c7829f002c74"
              }}
              style={styles.ImageBackground_100_1212}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/281940ea-e03a-4e03-a3ad-fd235a155979"
              }}
              style={styles.ImageBackground_100_1214}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3378e909-e9fe-4812-936c-f8290c27716d"
              }}
              style={styles.ImageBackground_100_1216}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/79c1086f-b34a-4abf-9fcc-4d97d1e0caad"
              }}
              style={styles.ImageBackground_100_1218}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/78fd8cff-6e43-4e1c-8bf7-0f2d2f1593a4"
              }}
              style={styles.ImageBackground_100_1220}
            />
          </View>
          <View style={styles.View_100_1225}>
            <View style={styles.View_100_899}>
              <Text style={styles.Text_100_899}>Constitutional (Gen)</Text>
            </View>
            <View style={styles.View_100_909}>
              <Text style={styles.Text_100_909}>Fatigue</Text>
            </View>
            <View style={styles.View_100_919}>
              <Text style={styles.Text_100_919}>Fever</Text>
            </View>
            <View style={styles.View_100_1229}>
              <View style={styles.View_100_900}>
                <Text style={styles.Text_100_900}>Genutourinary (GU)</Text>
              </View>
              <View style={styles.View_100_901}>
                <Text style={styles.Text_100_901}>Musculoskeletal (MSK)</Text>
              </View>
              <View style={styles.View_100_902}>
                <Text style={styles.Text_100_902}>Psychiatric</Text>
              </View>
              <View style={styles.View_100_903}>
                <Text style={styles.Text_100_903}>Neurological (CNS)</Text>
              </View>
              <View style={styles.View_100_904}>
                <Text style={styles.Text_100_904}>
                  Head, Ears, Eyes, Nose, Throat (HEENT)
                </Text>
              </View>
              <View style={styles.View_100_905}>
                <Text style={styles.Text_100_905}>Gastrointestinal (GI)</Text>
              </View>
              <View style={styles.View_100_906}>
                <Text style={styles.Text_100_906}>Skin</Text>
              </View>
              <View style={styles.View_100_907}>
                <Text style={styles.Text_100_907}>Cardiovascular (CV)</Text>
              </View>
              <View style={styles.View_100_908}>
                <Text style={styles.Text_100_908}>Respiratory (Resp)</Text>
              </View>
              <View style={styles.View_100_910}>
                <Text style={styles.Text_100_910}>Dysuria</Text>
              </View>
              <View style={styles.View_100_911}>
                <Text style={styles.Text_100_911}>Joint pain</Text>
              </View>
              <View style={styles.View_100_912}>
                <Text style={styles.Text_100_912}>Anxiety</Text>
              </View>
              <View style={styles.View_100_913}>
                <Text style={styles.Text_100_913}>Headache</Text>
              </View>
              <View style={styles.View_100_914}>
                <Text style={styles.Text_100_914}>Sore throat</Text>
              </View>
              <View style={styles.View_100_915}>
                <Text style={styles.Text_100_915}>Nausea</Text>
              </View>
              <View style={styles.View_100_916}>
                <Text style={styles.Text_100_916}>Rash</Text>
              </View>
              <View style={styles.View_100_917}>
                <Text style={styles.Text_100_917}>Chest Pains</Text>
              </View>
              <View style={styles.View_100_918}>
                <Text style={styles.Text_100_918}>Shortness of breath</Text>
              </View>
              <View style={styles.View_100_920}>
                <Text style={styles.Text_100_920}>Frequency</Text>
              </View>
              <View style={styles.View_100_921}>
                <Text style={styles.Text_100_921}>Back pain</Text>
              </View>
              <View style={styles.View_100_922}>
                <Text style={styles.Text_100_922}>Depression</Text>
              </View>
              <View style={styles.View_100_923}>
                <Text style={styles.Text_100_923}>Dizziness</Text>
              </View>
              <View style={styles.View_100_924}>
                <Text style={styles.Text_100_924}>Congestion</Text>
              </View>
              <View style={styles.View_100_925}>
                <Text style={styles.Text_100_925}>Vomiting</Text>
              </View>
              <View style={styles.View_100_926}>
                <Text style={styles.Text_100_926}>Wound</Text>
              </View>
              <View style={styles.View_100_927}>
                <Text style={styles.Text_100_927}>Palpitations</Text>
              </View>
              <View style={styles.View_100_928}>
                <Text style={styles.Text_100_928}>Cough</Text>
              </View>
              <View style={styles.View_100_929}>
                <Text style={styles.Text_100_929}>Chills</Text>
              </View>
              <View style={styles.View_100_930}>
                <Text style={styles.Text_100_930}>Urgency</Text>
              </View>
              <View style={styles.View_100_931}>
                <Text style={styles.Text_100_931}>Ataxia</Text>
              </View>
              <View style={styles.View_100_932}>
                <Text style={styles.Text_100_932}>Blurred vision</Text>
              </View>
              <View style={styles.View_100_933}>
                <Text style={styles.Text_100_933}>Diarrhea</Text>
              </View>
              <View style={styles.View_100_934}>
                <Text style={styles.Text_100_934}>Lesions</Text>
              </View>
              <View style={styles.View_100_935}>
                <Text style={styles.Text_100_935}>Leg Eldema</Text>
              </View>
              <View style={styles.View_100_936}>
                <Text style={styles.Text_100_936}>Wheezing</Text>
              </View>
              <View style={styles.View_100_937}>
                <Text style={styles.Text_100_937}>Appetite loss</Text>
              </View>
              <View style={styles.View_100_938}>
                <Text style={styles.Text_100_938}>Discharge</Text>
              </View>
              <View style={styles.View_100_939}>
                <Text style={styles.Text_100_939}>Memory loss</Text>
              </View>
              <View style={styles.View_100_940}>
                <Text style={styles.Text_100_940}>Ear ache</Text>
              </View>
              <View style={styles.View_100_941}>
                <Text style={styles.Text_100_941}>Constipation</Text>
              </View>
              <View style={styles.View_100_942}>
                <Text style={styles.Text_100_942}>Hoarseness</Text>
              </View>
              <View style={styles.View_100_943}>
                <Text style={styles.Text_100_943}>Abdominal pain</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_126_810}>
        <View style={styles.View_126_811} />
        <View style={styles.View_126_812}>
          <View style={styles.View_126_813}>
            <Text style={styles.Text_126_813}>Name</Text>
          </View>
          <View style={styles.View_126_814} />
          <View style={styles.View_126_815}>
            <Text style={styles.Text_126_815}>Jackson Kleinthink</Text>
          </View>
        </View>
        <View style={styles.View_126_816}>
          <View style={styles.View_126_817}>
            <Text style={styles.Text_126_817}>Age</Text>
          </View>
          <View style={styles.View_126_818} />
          <View style={styles.View_126_819}>
            <Text style={styles.Text_126_819}>29</Text>
          </View>
        </View>
        <View style={styles.View_126_820}>
          <View style={styles.View_126_821}>
            <Text style={styles.Text_126_821}>Room</Text>
          </View>
          <View style={styles.View_126_822} />
          <View style={styles.View_126_823}>
            <Text style={styles.Text_126_823}>ED | ED1</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/31722c12-a701-44a3-8e9a-4aeb3b48384a"
            }}
            style={styles.ImageBackground_126_824}
          />
        </View>
        <View style={styles.View_126_825}>
          <View style={styles.View_126_826}>
            <Text style={styles.Text_126_826}>Sex</Text>
          </View>
          <View style={styles.View_126_827} />
          <View style={styles.View_126_828}>
            <Text style={styles.Text_126_828}>Female</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/86ea7bca-b39f-430a-be44-d6134664ff5a"
            }}
            style={styles.ImageBackground_126_829}
          />
        </View>
      </View>
      <View style={styles.View_134_112}>
        <View style={styles.View_134_113} />
        <View style={styles.View_134_114}>
          <View style={styles.View_134_115}>
            <Text style={styles.Text_134_115}>Name</Text>
          </View>
          <View style={styles.View_134_116} />
          <View style={styles.View_134_117}>
            <Text style={styles.Text_134_117}>Jackson Kleinthink</Text>
          </View>
        </View>
        <View style={styles.View_134_118}>
          <View style={styles.View_134_119}>
            <Text style={styles.Text_134_119}>Age</Text>
          </View>
          <View style={styles.View_134_120} />
          <View style={styles.View_134_121}>
            <Text style={styles.Text_134_121}>29</Text>
          </View>
        </View>
        <View style={styles.View_134_122}>
          <View style={styles.View_134_123}>
            <Text style={styles.Text_134_123}>Room</Text>
          </View>
          <View style={styles.View_134_124} />
          <View style={styles.View_134_125}>
            <Text style={styles.Text_134_125}>ED | ED1</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8e8210fb-6d29-4c73-b6fc-17e8413bb5dc"
            }}
            style={styles.ImageBackground_134_126}
          />
        </View>
        <View style={styles.View_134_127}>
          <View style={styles.View_134_128}>
            <Text style={styles.Text_134_128}>Sex</Text>
          </View>
          <View style={styles.View_134_129} />
          <View style={styles.View_134_130}>
            <Text style={styles.Text_134_130}>Female</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5ff48310-e6d5-40e2-bf64-a85e01c062cd"
            }}
            style={styles.ImageBackground_134_131}
          />
        </View>
      </View>
      <View style={styles.View_134_138}>
        <View style={styles.View_134_139} />
        <View style={styles.View_134_140}>
          <Text style={styles.Text_134_140}>Plan</Text>
        </View>
        <View style={styles.View_134_141}>
          <Text style={styles.Text_134_141}>
            Traces of heamoglobin found Patient might have lumps in their
            enzymes close to the walls of the medulla No signs on Covid
            Monkeypox traces seen Red blood cells are blue
          </Text>
        </View>
        <View style={styles.View_134_142} />
        <View style={styles.View_134_143}>
          <Text style={styles.Text_134_143}>Plan</Text>
        </View>
        <View style={styles.View_134_144}>
          <Text style={styles.Text_134_144}>
            Traces of heamoglobin found Patient might have lumps in their
            enzymes close to the walls of the medulla No signs on Covid
            Monkeypox traces seen Red blood cells are blue
          </Text>
        </View>
      </View>
      <View style={styles.View_134_145} />
      <View style={styles.View_134_146}>
        <Text style={styles.Text_134_146}>Notes</Text>
      </View>
      <View style={styles.View_134_147}>
        <Text style={styles.Text_134_147}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of
          Good and Evil) by Cicero, written in 45 BC. This book is a treatise on
          the theory of ethics, very popular during the Renaissance. The first
          line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes
          from a line in section 1.10.32. The standard chunk of Lorem Ipsum used
          since the 1500s is reproduced below for those interested. Sections
          1.10.32 and 1.10.33 from &quot;de Finibus Bonorum et Malorum&quot; by
          Cicero are also reproduced in their exact original form, accompanied
          by English versions from the 1914 translation by H. Rackham
        </Text>
      </View>
      <View style={styles.View_134_148} />
      <View style={styles.View_134_149}>
        <Text style={styles.Text_134_149}>Notes</Text>
      </View>
      <View style={styles.View_134_150}>
        <Text style={styles.Text_134_150}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of
          Good and Evil) by Cicero, written in 45 BC. This book is a treatise on
          the theory of ethics, very popular during the Renaissance. The first
          line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes
          from a line in section 1.10.32. The standard chunk of Lorem Ipsum used
          since the 1500s is reproduced below for those interested. Sections
          1.10.32 and 1.10.33 from &quot;de Finibus Bonorum et Malorum&quot; by
          Cicero are also reproduced in their exact original form, accompanied
          by English versions from the 1914 translation by H. Rackham
        </Text>
      </View>
      <View style={styles.View_140_640}>
        <View style={styles.View_140_641} />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5ca66acf-2c75-47c5-a3e6-245f0878d33b"
          }}
          style={styles.TouchableOpacity_140_642}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("48_2"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0bb1ecd5-64a2-4e2c-b43e-572a81f6a7b9"
          }}
          style={styles.TouchableOpacity_140_644}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("112_562"))
          }
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_140_646}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("55_94"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc8ab49b-b5a1-429b-b375-9767ab9eea89"
            }}
            style={styles.ImageBackground_140_647}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e394cd16-86fb-4340-9dfb-74c0fb8d33e6"
            }}
            style={styles.ImageBackground_140_649}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.View_126_848}>
        <View style={styles.View_126_849} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0353b388-02a7-40a7-ae73-0500d973c1b8"
          }}
          style={styles.ImageBackground_168_51}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aee01435-0a6a-4647-8038-c61e956af52a"
          }}
          style={styles.ImageBackground_168_53}
        />
        <View style={styles.View_134_177}>
          <View style={styles.View_134_180} />
          <TouchableOpacity
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/40a55fd3-bd09-4dc1-bf4e-1241eabc4805"
            }}
            style={styles.TouchableOpacity_168_306}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("168_65"))
            }
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1e5b6f6d-d637-482b-9494-0f7526b3e28f"
            }}
            style={styles.ImageBackground_165_40}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1960838f-87b6-4f83-9155-85dc00733d77"
            }}
            style={styles.ImageBackground_134_166}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8dbe592d-0b90-4389-9b49-6d2d5aff328a"
            }}
            style={styles.ImageBackground_134_173}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7bb08ddd-8cda-457d-b116-447889a7a971"
            }}
            style={styles.ImageBackground_134_175}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0086241e-7785-45c7-8db2-b272ff917220"
          }}
          style={styles.ImageBackground_134_82}
        />
        <View style={styles.View_126_850}>
          <Text style={styles.Text_126_850}>New Patient</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d5308e67-771d-4850-9080-676a5d5097d8"
          }}
          style={styles.ImageBackground_126_851}
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_134_101}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("100_1572"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c3abb6df-14ce-4428-9d51-5615027b7134"
            }}
            style={styles.ImageBackground_134_93}
          />
          <View style={styles.View_134_95}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/033d6f4c-f06f-451b-9b53-ade1a0a4d5ff"
              }}
              style={styles.ImageBackground_134_96}
            />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(244, 247, 253, 1)" },
  View_2: { height: hp("301%") },
  View_126_809: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("111%")
  },
  View_82_444: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_134_89: {
    width: wp("83%"),
    minWidth: wp("83%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_134_89: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_390: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_82_390: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_126_808: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("37%")
  },
  View_82_443: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_87_15: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_87_15: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_1423: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_100_1423: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_87_17: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_87_17: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_83: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("72%"),
    minHeight: hp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("37%")
  },
  View_134_84: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("72%"),
    minHeight: hp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_134_85: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_134_85: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_86: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_134_86: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_126_807: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("72%"),
    minHeight: hp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("37%")
  },
  View_82_433: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("72%"),
    minHeight: hp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_95_632: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("3%")
  },
  ImageBackground_95_633: {
    width: wp("4%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_95_301: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_95_301: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_1227: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("57%"),
    minHeight: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_100_1224: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("233%"),
    minHeight: hp("233%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("6%")
  },
  ImageBackground_95_307: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_100_1154: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  ImageBackground_100_1156: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%")
  },
  ImageBackground_100_1158: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%")
  },
  ImageBackground_100_1160: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26%")
  },
  ImageBackground_100_1162: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31%")
  },
  ImageBackground_100_1164: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35%")
  },
  ImageBackground_100_1166: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48%")
  },
  ImageBackground_100_1168: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53%")
  },
  ImageBackground_100_1170: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("58%")
  },
  ImageBackground_100_1172: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("71%")
  },
  ImageBackground_100_1174: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("75%")
  },
  ImageBackground_100_1176: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("80%")
  },
  ImageBackground_100_1178: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("84%")
  },
  ImageBackground_100_1180: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("89%")
  },
  ImageBackground_100_1182: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("102%")
  },
  ImageBackground_100_1184: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("106%")
  },
  ImageBackground_100_1186: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("111%")
  },
  ImageBackground_100_1188: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("115%")
  },
  ImageBackground_100_1190: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("120%")
  },
  ImageBackground_100_1192: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("133%")
  },
  ImageBackground_100_1194: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("138%")
  },
  ImageBackground_100_1196: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("142%")
  },
  ImageBackground_100_1198: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("155%")
  },
  ImageBackground_100_1200: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("160%")
  },
  ImageBackground_100_1202: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("164%")
  },
  ImageBackground_100_1204: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("169%")
  },
  ImageBackground_100_1206: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("182%")
  },
  ImageBackground_100_1208: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("186%")
  },
  ImageBackground_100_1210: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("200%")
  },
  ImageBackground_100_1212: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("204%")
  },
  ImageBackground_100_1214: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("208%")
  },
  ImageBackground_100_1216: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("213%")
  },
  ImageBackground_100_1218: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("226%")
  },
  ImageBackground_100_1220: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("231%")
  },
  View_100_1225: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("240%"),
    minHeight: hp("240%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_100_899: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_100_899: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_909: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_100_909: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_919: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_100_919: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_1229: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("225%"),
    minHeight: hp("225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%")
  },
  View_100_900: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("140%"),
    justifyContent: "flex-start"
  },
  Text_100_900: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_901: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("167%"),
    justifyContent: "flex-start"
  },
  Text_100_901: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_902: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("211%"),
    justifyContent: "flex-start"
  },
  Text_100_902: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_903: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("185%"),
    justifyContent: "flex-start"
  },
  Text_100_903: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_904: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_100_904: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_905: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("87%"),
    justifyContent: "flex-start"
  },
  Text_100_905: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_906: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("118%"),
    justifyContent: "flex-start"
  },
  Text_100_906: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_907: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_100_907: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_908: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34%"),
    justifyContent: "flex-start"
  },
  Text_100_908: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_910: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("146%"),
    justifyContent: "flex-start"
  },
  Text_100_910: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_911: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("173%"),
    justifyContent: "flex-start"
  },
  Text_100_911: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_912: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("217%"),
    justifyContent: "flex-start"
  },
  Text_100_912: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_913: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("191%"),
    justifyContent: "flex-start"
  },
  Text_100_913: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_914: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("62%"),
    justifyContent: "flex-start"
  },
  Text_100_914: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_915: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("93%"),
    justifyContent: "flex-start"
  },
  Text_100_915: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_916: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("124%"),
    justifyContent: "flex-start"
  },
  Text_100_916: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_917: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_100_917: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_918: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40%"),
    justifyContent: "flex-start"
  },
  Text_100_918: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_920: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("151%"),
    justifyContent: "flex-start"
  },
  Text_100_920: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_921: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("177%"),
    justifyContent: "flex-start"
  },
  Text_100_921: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_922: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("222%"),
    justifyContent: "flex-start"
  },
  Text_100_922: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_923: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("195%"),
    justifyContent: "flex-start"
  },
  Text_100_923: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_924: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("66%"),
    justifyContent: "flex-start"
  },
  Text_100_924: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_925: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("98%"),
    justifyContent: "flex-start"
  },
  Text_100_925: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_926: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("129%"),
    justifyContent: "flex-start"
  },
  Text_100_926: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_927: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_100_927: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_928: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44%"),
    justifyContent: "flex-start"
  },
  Text_100_928: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_929: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_100_929: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_930: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("155%"),
    justifyContent: "flex-start"
  },
  Text_100_930: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_931: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("200%"),
    justifyContent: "flex-start"
  },
  Text_100_931: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_932: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("71%"),
    justifyContent: "flex-start"
  },
  Text_100_932: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_933: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("102%"),
    justifyContent: "flex-start"
  },
  Text_100_933: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_934: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("133%"),
    justifyContent: "flex-start"
  },
  Text_100_934: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_935: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_100_935: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_936: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("49%"),
    justifyContent: "flex-start"
  },
  Text_100_936: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_937: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_100_937: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_938: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("160%"),
    justifyContent: "flex-start"
  },
  Text_100_938: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_939: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("204%"),
    justifyContent: "flex-start"
  },
  Text_100_939: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_940: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("75%"),
    justifyContent: "flex-start"
  },
  Text_100_940: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_941: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("107%"),
    justifyContent: "flex-start"
  },
  Text_100_941: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_942: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("80%"),
    justifyContent: "flex-start"
  },
  Text_100_942: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_943: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("111%"),
    justifyContent: "flex-start"
  },
  Text_100_943: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_126_810: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("21%")
  },
  View_126_811: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_126_812: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%")
  },
  View_126_813: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_126_813: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_126_814: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(244, 247, 253, 1)"
  },
  View_126_815: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_126_815: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_126_816: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  View_126_817: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_126_817: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_126_818: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(244, 247, 253, 1)"
  },
  View_126_819: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_126_819: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_126_820: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("2%")
  },
  View_126_821: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_126_821: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_126_822: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(244, 247, 253, 1)"
  },
  View_126_823: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_126_823: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_126_824: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("6%")
  },
  View_126_825: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("2%")
  },
  View_126_826: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_126_826: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_126_827: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(244, 247, 253, 1)"
  },
  View_126_828: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_126_828: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_126_829: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("6%")
  },
  View_134_112: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("20%")
  },
  View_134_113: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_134_114: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%")
  },
  View_134_115: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_134_115: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_116: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(244, 247, 253, 1)"
  },
  View_134_117: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_134_117: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_118: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  View_134_119: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_134_119: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_120: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(244, 247, 253, 1)"
  },
  View_134_121: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_134_121: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_122: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("2%")
  },
  View_134_123: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_134_123: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_124: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(244, 247, 253, 1)"
  },
  View_134_125: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_134_125: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_134_126: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("6%")
  },
  View_134_127: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("2%")
  },
  View_134_128: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_134_128: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_129: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(244, 247, 253, 1)"
  },
  View_134_130: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_134_130: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_134_131: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("6%")
  },
  View_134_138: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("162%")
  },
  View_134_139: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_134_140: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_134_140: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_141: {
    width: wp("88%"),
    minWidth: wp("88%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_134_141: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_142: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_134_143: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_134_143: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_144: {
    width: wp("88%"),
    minWidth: wp("88%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_134_144: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_145: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("73%"),
    minHeight: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("203%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_134_146: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("206%"),
    justifyContent: "flex-start"
  },
  Text_134_146: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_147: {
    width: wp("88%"),
    minWidth: wp("88%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("211%"),
    justifyContent: "flex-start"
  },
  Text_134_147: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_148: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("73%"),
    minHeight: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("203%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_134_149: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("206%"),
    justifyContent: "flex-start"
  },
  Text_134_149: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_150: {
    width: wp("88%"),
    minWidth: wp("88%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("211%"),
    justifyContent: "flex-start"
  },
  Text_134_150: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_640: {
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
  View_140_641: {
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
  TouchableOpacity_140_642: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  TouchableOpacity_140_644: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%")
  },
  TouchableOpacity_140_646: {
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
  ImageBackground_140_647: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_140_649: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_126_848: {
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
  View_126_849: {
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
  ImageBackground_168_51: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%")
  },
  ImageBackground_168_53: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%")
  },
  View_134_177: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("6%")
  },
  View_134_180: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(244, 247, 253, 1)"
  },
  TouchableOpacity_168_306: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("0%")
  },
  ImageBackground_165_40: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_134_166: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_134_173: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_134_175: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_134_82: {
    width: wp("4%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%"),
    top: hp("9%")
  },
  View_126_850: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_126_850: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_126_851: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("9%")
  },
  TouchableOpacity_134_101: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("8%")
  },
  ImageBackground_134_93: {
    width: wp("4%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_134_95: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_134_96: {
    width: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
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
