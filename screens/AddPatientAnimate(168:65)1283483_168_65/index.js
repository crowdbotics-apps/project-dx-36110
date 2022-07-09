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
      <View style={styles.View_168_66}>
        <View style={styles.View_168_67} />
        <View style={styles.View_168_68}>
          <Text style={styles.Text_168_68}>
            Traces of heamoglobin found Patient might have lumps in their
            enzymes close to the walls of the medulla No signs on Covid
            Monkeypox traces seen Red blood cells are blue No chemo improvements
          </Text>
        </View>
        <View style={styles.View_168_69}>
          <Text style={styles.Text_168_69}>Subjective</Text>
        </View>
      </View>
      <View style={styles.View_168_70}>
        <View style={styles.View_168_71} />
        <View style={styles.View_168_72}>
          <Text style={styles.Text_168_72}>Lab’s &amp; Vitals</Text>
        </View>
        <View style={styles.View_168_73}>
          <Text style={styles.Text_168_73}>Lab’s &amp; Vitals</Text>
        </View>
        <View style={styles.View_168_74}>
          <Text style={styles.Text_168_74}>
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
      <View style={styles.View_168_75}>
        <View style={styles.View_168_76} />
        <View style={styles.View_168_77}>
          <Text style={styles.Text_168_77}>Lab’s &amp; Vitals</Text>
        </View>
        <View style={styles.View_168_78}>
          <Text style={styles.Text_168_78}>Lab’s &amp; Vitals</Text>
        </View>
      </View>
      <View style={styles.View_168_86}>
        <View style={styles.View_168_87} />
        <TouchableOpacity
          style={styles.TouchableOpacity_168_88}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("95_631"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/89c9991c-9b61-48d2-b88c-d30e256a2a19"
            }}
            style={styles.ImageBackground_168_89}
          />
        </TouchableOpacity>
        <View style={styles.View_168_94}>
          <Text style={styles.Text_168_94}>ROS</Text>
        </View>
        <View style={styles.View_168_95}>
          <View style={styles.View_168_96}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/230bd34a-0fd5-4c2c-b75f-d7e8fe9f95a4"
              }}
              style={styles.ImageBackground_168_97}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/77cb2771-5580-4cbf-8c3b-d8d98a0a0f51"
              }}
              style={styles.ImageBackground_168_99}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/69a46cd4-725e-47af-a89f-d5144773349b"
              }}
              style={styles.ImageBackground_168_101}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ac20884d-bb2e-4c94-b4d4-be561a30241a"
              }}
              style={styles.ImageBackground_168_103}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9dbce002-0267-4f0c-94c1-a0d726e469a9"
              }}
              style={styles.ImageBackground_168_105}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1340e502-a635-4a87-851d-9455ba9a4367"
              }}
              style={styles.ImageBackground_168_107}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/53256e8b-b43e-49a9-9a2b-7a693fb2ccab"
              }}
              style={styles.ImageBackground_168_109}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1ce684b1-835d-413d-a89a-89c02466747c"
              }}
              style={styles.ImageBackground_168_111}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb8a301d-9a4b-49f7-9373-9ba84982049d"
              }}
              style={styles.ImageBackground_168_113}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/472a5c21-f99f-4606-8677-5970c93a72cb"
              }}
              style={styles.ImageBackground_168_115}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/96c81334-896b-4827-8fae-c645fd06544a"
              }}
              style={styles.ImageBackground_168_117}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b49e39e0-f329-4deb-b864-2c008a739b9a"
              }}
              style={styles.ImageBackground_168_119}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6ddacd70-822c-49af-bdfc-d199bcd07257"
              }}
              style={styles.ImageBackground_168_121}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f2f20a2c-0626-453c-be5d-100ceb9185f5"
              }}
              style={styles.ImageBackground_168_123}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/275d6889-f97b-447d-97d8-ba26a2af3774"
              }}
              style={styles.ImageBackground_168_125}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d4fe894b-fb0b-464e-8907-31bf2dbd196c"
              }}
              style={styles.ImageBackground_168_127}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2d4789af-1b9f-4c40-97a0-1a4ab2f0679d"
              }}
              style={styles.ImageBackground_168_129}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb461447-9259-422a-b4c1-0894d269b381"
              }}
              style={styles.ImageBackground_168_131}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fef52379-7c0a-4606-a523-54afe7145806"
              }}
              style={styles.ImageBackground_168_133}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c1b2576c-ee85-4d27-b7eb-3669e21ed4da"
              }}
              style={styles.ImageBackground_168_135}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d5f0ad00-c19a-4926-9be4-71b2c7a8e5f4"
              }}
              style={styles.ImageBackground_168_137}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/50d9389a-b1cf-4650-8803-57b59d258df8"
              }}
              style={styles.ImageBackground_168_139}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/942a4b7b-e54f-46d7-a07f-70df974c040c"
              }}
              style={styles.ImageBackground_168_141}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b20bcb9f-2565-44ea-965a-135699c23119"
              }}
              style={styles.ImageBackground_168_143}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f75e4324-e444-448f-b6c0-d8382c0745be"
              }}
              style={styles.ImageBackground_168_145}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/923d5622-84de-4339-b983-827ee75509b5"
              }}
              style={styles.ImageBackground_168_147}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9cdde701-ed61-4af5-b237-a225e2609d19"
              }}
              style={styles.ImageBackground_168_149}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/59ea6b57-5bc2-4dd4-a59a-c56226e4ff97"
              }}
              style={styles.ImageBackground_168_151}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/694231d2-48a0-4749-bf99-e4d537f8e569"
              }}
              style={styles.ImageBackground_168_153}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4e5bd20e-e2bb-4a1a-a371-d5e7f134914c"
              }}
              style={styles.ImageBackground_168_155}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/417b5e02-5070-4426-8b5a-8b3297ee1587"
              }}
              style={styles.ImageBackground_168_157}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2798b55c-26da-4d2d-bf0a-79ae97cc6dc2"
              }}
              style={styles.ImageBackground_168_159}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7aed08d4-49a2-4b11-a6bc-f36063698ba3"
              }}
              style={styles.ImageBackground_168_161}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a436145f-b6ee-4443-ad36-be1140dbee6b"
              }}
              style={styles.ImageBackground_168_163}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6842b483-8ad9-4e04-a63a-402242bea087"
              }}
              style={styles.ImageBackground_168_165}
            />
          </View>
          <View style={styles.View_168_167}>
            <View style={styles.View_168_168}>
              <Text style={styles.Text_168_168}>Constitutional (Gen)</Text>
            </View>
            <View style={styles.View_168_169}>
              <Text style={styles.Text_168_169}>Fatigue</Text>
            </View>
            <View style={styles.View_168_170}>
              <Text style={styles.Text_168_170}>Fever</Text>
            </View>
            <View style={styles.View_168_171}>
              <View style={styles.View_168_172}>
                <Text style={styles.Text_168_172}>Genutourinary (GU)</Text>
              </View>
              <View style={styles.View_168_173}>
                <Text style={styles.Text_168_173}>Musculoskeletal (MSK)</Text>
              </View>
              <View style={styles.View_168_174}>
                <Text style={styles.Text_168_174}>Psychiatric</Text>
              </View>
              <View style={styles.View_168_175}>
                <Text style={styles.Text_168_175}>Neurological (CNS)</Text>
              </View>
              <View style={styles.View_168_176}>
                <Text style={styles.Text_168_176}>
                  Head, Ears, Eyes, Nose, Throat (HEENT)
                </Text>
              </View>
              <View style={styles.View_168_177}>
                <Text style={styles.Text_168_177}>Gastrointestinal (GI)</Text>
              </View>
              <View style={styles.View_168_178}>
                <Text style={styles.Text_168_178}>Skin</Text>
              </View>
              <View style={styles.View_168_179}>
                <Text style={styles.Text_168_179}>Cardiovascular (CV)</Text>
              </View>
              <View style={styles.View_168_180}>
                <Text style={styles.Text_168_180}>Respiratory (Resp)</Text>
              </View>
              <View style={styles.View_168_181}>
                <Text style={styles.Text_168_181}>Dysuria</Text>
              </View>
              <View style={styles.View_168_182}>
                <Text style={styles.Text_168_182}>Joint pain</Text>
              </View>
              <View style={styles.View_168_183}>
                <Text style={styles.Text_168_183}>Anxiety</Text>
              </View>
              <View style={styles.View_168_184}>
                <Text style={styles.Text_168_184}>Headache</Text>
              </View>
              <View style={styles.View_168_185}>
                <Text style={styles.Text_168_185}>Sore throat</Text>
              </View>
              <View style={styles.View_168_186}>
                <Text style={styles.Text_168_186}>Nausea</Text>
              </View>
              <View style={styles.View_168_187}>
                <Text style={styles.Text_168_187}>Rash</Text>
              </View>
              <View style={styles.View_168_188}>
                <Text style={styles.Text_168_188}>Chest Pains</Text>
              </View>
              <View style={styles.View_168_189}>
                <Text style={styles.Text_168_189}>Shortness of breath</Text>
              </View>
              <View style={styles.View_168_190}>
                <Text style={styles.Text_168_190}>Frequency</Text>
              </View>
              <View style={styles.View_168_191}>
                <Text style={styles.Text_168_191}>Back pain</Text>
              </View>
              <View style={styles.View_168_192}>
                <Text style={styles.Text_168_192}>Depression</Text>
              </View>
              <View style={styles.View_168_193}>
                <Text style={styles.Text_168_193}>Dizziness</Text>
              </View>
              <View style={styles.View_168_194}>
                <Text style={styles.Text_168_194}>Congestion</Text>
              </View>
              <View style={styles.View_168_195}>
                <Text style={styles.Text_168_195}>Vomiting</Text>
              </View>
              <View style={styles.View_168_196}>
                <Text style={styles.Text_168_196}>Wound</Text>
              </View>
              <View style={styles.View_168_197}>
                <Text style={styles.Text_168_197}>Palpitations</Text>
              </View>
              <View style={styles.View_168_198}>
                <Text style={styles.Text_168_198}>Cough</Text>
              </View>
              <View style={styles.View_168_199}>
                <Text style={styles.Text_168_199}>Chills</Text>
              </View>
              <View style={styles.View_168_200}>
                <Text style={styles.Text_168_200}>Urgency</Text>
              </View>
              <View style={styles.View_168_201}>
                <Text style={styles.Text_168_201}>Ataxia</Text>
              </View>
              <View style={styles.View_168_202}>
                <Text style={styles.Text_168_202}>Blurred vision</Text>
              </View>
              <View style={styles.View_168_203}>
                <Text style={styles.Text_168_203}>Diarrhea</Text>
              </View>
              <View style={styles.View_168_204}>
                <Text style={styles.Text_168_204}>Lesions</Text>
              </View>
              <View style={styles.View_168_205}>
                <Text style={styles.Text_168_205}>Leg Eldema</Text>
              </View>
              <View style={styles.View_168_206}>
                <Text style={styles.Text_168_206}>Wheezing</Text>
              </View>
              <View style={styles.View_168_207}>
                <Text style={styles.Text_168_207}>Appetite loss</Text>
              </View>
              <View style={styles.View_168_208}>
                <Text style={styles.Text_168_208}>Discharge</Text>
              </View>
              <View style={styles.View_168_209}>
                <Text style={styles.Text_168_209}>Memory loss</Text>
              </View>
              <View style={styles.View_168_210}>
                <Text style={styles.Text_168_210}>Ear ache</Text>
              </View>
              <View style={styles.View_168_211}>
                <Text style={styles.Text_168_211}>Constipation</Text>
              </View>
              <View style={styles.View_168_212}>
                <Text style={styles.Text_168_212}>Hoarseness</Text>
              </View>
              <View style={styles.View_168_213}>
                <Text style={styles.Text_168_213}>Abdominal pain</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_168_214}>
        <View style={styles.View_168_215} />
        <View style={styles.View_168_216}>
          <View style={styles.View_168_217}>
            <Text style={styles.Text_168_217}>Name</Text>
          </View>
          <View style={styles.View_168_218} />
          <View style={styles.View_168_219}>
            <Text style={styles.Text_168_219}>Jackson Kleinthink</Text>
          </View>
        </View>
        <View style={styles.View_168_220}>
          <View style={styles.View_168_221}>
            <Text style={styles.Text_168_221}>Age</Text>
          </View>
          <View style={styles.View_168_222} />
          <View style={styles.View_168_223}>
            <Text style={styles.Text_168_223}>29</Text>
          </View>
        </View>
        <View style={styles.View_168_224}>
          <View style={styles.View_168_225}>
            <Text style={styles.Text_168_225}>Room</Text>
          </View>
          <View style={styles.View_168_226} />
          <View style={styles.View_168_227}>
            <Text style={styles.Text_168_227}>ED | ED1</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a6c3653e-f332-4703-a966-59bd3b39a0ff"
            }}
            style={styles.ImageBackground_168_228}
          />
        </View>
        <View style={styles.View_168_229}>
          <View style={styles.View_168_230}>
            <Text style={styles.Text_168_230}>Sex</Text>
          </View>
          <View style={styles.View_168_231} />
          <View style={styles.View_168_232}>
            <Text style={styles.Text_168_232}>Female</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0e4ca9b7-147f-4cb5-926e-be2a71fec039"
            }}
            style={styles.ImageBackground_168_233}
          />
        </View>
      </View>
      <View style={styles.View_168_234}>
        <View style={styles.View_168_235} />
        <View style={styles.View_168_236}>
          <View style={styles.View_168_237}>
            <Text style={styles.Text_168_237}>Name</Text>
          </View>
          <View style={styles.View_168_238} />
          <View style={styles.View_168_239}>
            <Text style={styles.Text_168_239}>Jackson Kleinthink</Text>
          </View>
        </View>
        <View style={styles.View_168_240}>
          <View style={styles.View_168_241}>
            <Text style={styles.Text_168_241}>Age</Text>
          </View>
          <View style={styles.View_168_242} />
          <View style={styles.View_168_243}>
            <Text style={styles.Text_168_243}>29</Text>
          </View>
        </View>
        <View style={styles.View_168_244}>
          <View style={styles.View_168_245}>
            <Text style={styles.Text_168_245}>Room</Text>
          </View>
          <View style={styles.View_168_246} />
          <View style={styles.View_168_247}>
            <Text style={styles.Text_168_247}>ED | ED1</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d9dacc82-3454-452b-bcd2-8495b5bc1c42"
            }}
            style={styles.ImageBackground_168_248}
          />
        </View>
        <View style={styles.View_168_249}>
          <View style={styles.View_168_250}>
            <Text style={styles.Text_168_250}>Sex</Text>
          </View>
          <View style={styles.View_168_251} />
          <View style={styles.View_168_252}>
            <Text style={styles.Text_168_252}>Female</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/679681c3-3a95-4998-aeba-d634ec1c69c6"
            }}
            style={styles.ImageBackground_168_253}
          />
        </View>
      </View>
      <View style={styles.View_168_254}>
        <View style={styles.View_168_255} />
        <View style={styles.View_168_256}>
          <Text style={styles.Text_168_256}>Plan</Text>
        </View>
        <View style={styles.View_168_257}>
          <Text style={styles.Text_168_257}>
            Traces of heamoglobin found Patient might have lumps in their
            enzymes close to the walls of the medulla No signs on Covid
            Monkeypox traces seen Red blood cells are blue
          </Text>
        </View>
        <View style={styles.View_168_258} />
        <View style={styles.View_168_259}>
          <Text style={styles.Text_168_259}>Plan</Text>
        </View>
        <View style={styles.View_168_260}>
          <Text style={styles.Text_168_260}>
            Traces of heamoglobin found Patient might have lumps in their
            enzymes close to the walls of the medulla No signs on Covid
            Monkeypox traces seen Red blood cells are blue
          </Text>
        </View>
      </View>
      <View style={styles.View_168_261} />
      <View style={styles.View_168_262}>
        <Text style={styles.Text_168_262}>Notes</Text>
      </View>
      <View style={styles.View_168_263}>
        <Text style={styles.Text_168_263}>
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
      <View style={styles.View_168_264} />
      <View style={styles.View_168_265}>
        <Text style={styles.Text_168_265}>Notes</Text>
      </View>
      <View style={styles.View_168_266}>
        <Text style={styles.Text_168_266}>
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
      <View style={styles.View_168_267}>
        <View style={styles.View_168_268} />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ae413793-1e72-4383-b229-5b6c9fa046b8"
          }}
          style={styles.TouchableOpacity_168_269}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("48_2"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ff5397a5-86dc-4c07-87df-9abdcf84c0fb"
          }}
          style={styles.TouchableOpacity_168_271}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("112_562"))
          }
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_168_273}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("55_94"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4217d342-bf1e-4d7b-9c60-99035d7c97a4"
            }}
            style={styles.ImageBackground_168_274}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/032e1214-5b7e-40b4-bb82-2817480827c6"
            }}
            style={styles.ImageBackground_168_276}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.View_168_277}>
        <View style={styles.View_168_278} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ee2922ab-532c-4d9a-9465-63212a41246e"
          }}
          style={styles.ImageBackground_168_279}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/19f46211-bfef-492a-934b-006d98d5bfb4"
          }}
          style={styles.ImageBackground_168_281}
        />
        <View style={styles.View_168_282}>
          <View style={styles.View_168_283} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/33c1dce0-9409-4040-b6c5-0bed470b7e31"
            }}
            style={styles.ImageBackground_168_284}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7d98eb91-6812-42ab-8a74-df144fdfff31"
            }}
            style={styles.ImageBackground_168_286}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/639831a3-afcd-4bf6-9678-82d2c4dfeaf2"
          }}
          style={styles.ImageBackground_168_294}
        />
        <View style={styles.View_168_295}>
          <Text style={styles.Text_168_295}>New Patient</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/94b9eaa0-5498-40f4-a042-0560ea226a4c"
          }}
          style={styles.ImageBackground_168_296}
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_168_298}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("100_1572"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/09653cde-5254-4557-acd1-df514d9c4b64"
            }}
            style={styles.ImageBackground_168_299}
          />
          <View style={styles.View_168_301}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9065cfd8-454f-4d31-aeaf-8d16309a5975"
              }}
              style={styles.ImageBackground_168_302}
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
  View_168_66: {
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
  View_168_67: {
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
  View_168_68: {
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
  Text_168_68: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_69: {
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
  Text_168_69: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_70: {
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
  View_168_71: {
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
  View_168_72: {
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
  Text_168_72: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_73: {
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
  Text_168_73: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_74: {
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
  Text_168_74: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_75: {
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
  View_168_76: {
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
  View_168_77: {
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
  Text_168_77: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_78: {
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
  Text_168_78: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_86: {
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
  View_168_87: {
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
  TouchableOpacity_168_88: {
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
  ImageBackground_168_89: {
    width: wp("4%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_168_94: {
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
  Text_168_94: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_95: {
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
  View_168_96: {
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
  ImageBackground_168_97: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_168_99: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  ImageBackground_168_101: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%")
  },
  ImageBackground_168_103: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%")
  },
  ImageBackground_168_105: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26%")
  },
  ImageBackground_168_107: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31%")
  },
  ImageBackground_168_109: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35%")
  },
  ImageBackground_168_111: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48%")
  },
  ImageBackground_168_113: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53%")
  },
  ImageBackground_168_115: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("58%")
  },
  ImageBackground_168_117: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("71%")
  },
  ImageBackground_168_119: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("75%")
  },
  ImageBackground_168_121: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("80%")
  },
  ImageBackground_168_123: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("84%")
  },
  ImageBackground_168_125: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("89%")
  },
  ImageBackground_168_127: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("102%")
  },
  ImageBackground_168_129: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("106%")
  },
  ImageBackground_168_131: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("111%")
  },
  ImageBackground_168_133: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("115%")
  },
  ImageBackground_168_135: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("120%")
  },
  ImageBackground_168_137: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("133%")
  },
  ImageBackground_168_139: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("138%")
  },
  ImageBackground_168_141: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("142%")
  },
  ImageBackground_168_143: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("155%")
  },
  ImageBackground_168_145: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("160%")
  },
  ImageBackground_168_147: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("164%")
  },
  ImageBackground_168_149: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("169%")
  },
  ImageBackground_168_151: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("182%")
  },
  ImageBackground_168_153: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("186%")
  },
  ImageBackground_168_155: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("200%")
  },
  ImageBackground_168_157: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("204%")
  },
  ImageBackground_168_159: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("208%")
  },
  ImageBackground_168_161: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("213%")
  },
  ImageBackground_168_163: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("226%")
  },
  ImageBackground_168_165: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("231%")
  },
  View_168_167: {
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
  View_168_168: {
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
  Text_168_168: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_169: {
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
  Text_168_169: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_170: {
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
  Text_168_170: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_171: {
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
  View_168_172: {
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
  Text_168_172: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_173: {
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
  Text_168_173: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_174: {
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
  Text_168_174: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_175: {
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
  Text_168_175: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_176: {
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
  Text_168_176: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_177: {
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
  Text_168_177: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_178: {
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
  Text_168_178: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_179: {
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
  Text_168_179: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_180: {
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
  Text_168_180: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_181: {
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
  Text_168_181: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_182: {
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
  Text_168_182: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_183: {
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
  Text_168_183: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_184: {
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
  Text_168_184: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_185: {
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
  Text_168_185: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_186: {
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
  Text_168_186: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_187: {
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
  Text_168_187: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_188: {
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
  Text_168_188: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_189: {
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
  Text_168_189: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_190: {
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
  Text_168_190: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_191: {
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
  Text_168_191: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_192: {
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
  Text_168_192: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_193: {
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
  Text_168_193: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_194: {
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
  Text_168_194: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_195: {
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
  Text_168_195: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_196: {
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
  Text_168_196: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_197: {
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
  Text_168_197: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_198: {
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
  Text_168_198: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_199: {
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
  Text_168_199: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_200: {
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
  Text_168_200: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_201: {
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
  Text_168_201: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_202: {
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
  Text_168_202: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_203: {
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
  Text_168_203: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_204: {
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
  Text_168_204: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_205: {
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
  Text_168_205: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_206: {
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
  Text_168_206: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_207: {
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
  Text_168_207: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_208: {
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
  Text_168_208: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_209: {
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
  Text_168_209: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_210: {
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
  Text_168_210: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_211: {
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
  Text_168_211: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_212: {
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
  Text_168_212: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_213: {
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
  Text_168_213: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_214: {
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
  View_168_215: {
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
  View_168_216: {
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
  View_168_217: {
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
  Text_168_217: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_218: {
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
  View_168_219: {
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
  Text_168_219: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_220: {
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
  View_168_221: {
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
  Text_168_221: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_222: {
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
  View_168_223: {
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
  Text_168_223: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_224: {
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
  View_168_225: {
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
  Text_168_225: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_226: {
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
  View_168_227: {
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
  Text_168_227: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_168_228: {
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
  View_168_229: {
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
  View_168_230: {
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
  Text_168_230: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_231: {
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
  View_168_232: {
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
  Text_168_232: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_168_233: {
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
  View_168_234: {
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
  View_168_235: {
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
  View_168_236: {
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
  View_168_237: {
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
  Text_168_237: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_238: {
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
  View_168_239: {
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
  Text_168_239: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_240: {
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
  View_168_241: {
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
  Text_168_241: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_242: {
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
  View_168_243: {
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
  Text_168_243: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_244: {
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
  View_168_245: {
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
  Text_168_245: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_246: {
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
  View_168_247: {
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
  Text_168_247: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_168_248: {
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
  View_168_249: {
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
  View_168_250: {
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
  Text_168_250: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_251: {
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
  View_168_252: {
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
  Text_168_252: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_168_253: {
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
  View_168_254: {
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
  View_168_255: {
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
  View_168_256: {
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
  Text_168_256: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_257: {
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
  Text_168_257: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_258: {
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
  View_168_259: {
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
  Text_168_259: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_260: {
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
  Text_168_260: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_261: {
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
  View_168_262: {
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
  Text_168_262: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_263: {
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
  Text_168_263: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_264: {
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
  View_168_265: {
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
  Text_168_265: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_266: {
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
  Text_168_266: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_267: {
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
  View_168_268: {
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
  TouchableOpacity_168_269: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  TouchableOpacity_168_271: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%")
  },
  TouchableOpacity_168_273: {
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
  ImageBackground_168_274: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_168_276: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_168_277: {
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
  View_168_278: {
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
  ImageBackground_168_279: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%")
  },
  ImageBackground_168_281: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%")
  },
  View_168_282: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("7%")
  },
  View_168_283: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 247, 253, 1)"
  },
  ImageBackground_168_284: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%")
  },
  ImageBackground_168_286: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_168_294: {
    width: wp("4%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%"),
    top: hp("9%")
  },
  View_168_295: {
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
  Text_168_295: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_168_296: {
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
  TouchableOpacity_168_298: {
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
  ImageBackground_168_299: {
    width: wp("4%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_168_301: {
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
  ImageBackground_168_302: {
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
