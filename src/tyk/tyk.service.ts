import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import axios, { AxiosResponse } from 'axios';
import { TykApiResponseDto } from '../dto/tyk-api-response.dto';

@Injectable()
export class TykService {
  //HTTP Module 사용
  constructor(private readonly httpService: HttpService) {
  }

  getAllApi() {
    const token = '0a44e7a36da54d34541faccbea672178'
    const apiUrl = 'http://192.168.64.2:30639/api/apis'

    const headersRequest = {
      'Content-Type': 'application/json', // afaik this one is not needed
      'Authorization': `Bearer ${token}`,
    };
    const result = this.httpService.get(apiUrl, { headers: headersRequest }).toPromise();
    return {};
  }

  async getAllApi2() {
    const apiUrl = 'http://192.168.64.2:30639/api/apis'
    const token = '0a44e7a36da54d34541faccbea672178'
    const headersRequest = {
      'Content-Type': 'application/json', // afaik this one is not needed
      'Authorization': `Bearer ${token}`,
    };
    const response = await axios.get(apiUrl, {headers: headersRequest});
    return response.data;
  }

  async createApi() {
    const apiUrl = 'http://192.168.64.2:31474/api/apis'
    const token = '0a44e7a36da54d34541faccbea672178'

    const headersRequest = {
      'Content-Type': 'application/json', // afaik this one is not needed
      'Authorization': `Bearer ${token}`,
    };
    const bodyRequest = {
      "api_definition": null,
      "name": "Test",
      "auth": {
        "auth_header_name": "authorization"
      },
      "definition": {
        "location": "header",
        "key": ""
      },
      "proxy": {
        "target_url": "http://httpbin.org/"
      },
      "version_data": {
        "use_extended_paths": true,
        "not_versioned": true,
        "versions": {
          "Default": {
            "expires": "",
            "name": "Default",
            "paths": {
              "ignored": [],
              "white_list": [],
              "black_list": []
            },
            "extended_paths": {
              "ignored": [
                {
                  "path": "/test-path/",
                  "method_actions": {
                    "GET": {
                      "action": "no_action",
                      "code": 200,
                      "data": "",
                      "headers": {}
                    }
                  }
                },
                {
                  "path": "/test-path/reply",
                  "method_actions": {
                    "GET": {
                      "action": "reply",
                      "code": 200,
                      "data": "{\"foo\":\"bar\"}",
                      "headers": {
                        "x-test": "test"
                      }
                    }
                  }
                }
              ],
              "white_list": [],
              "black_list": []
            },
            "use_extended_paths": true
          }
        }
      },
      "use_oauth2": false,
      "oauth_meta": {
        "auth_login_redirect": "",
        "allowed_access_types": [],
        "allowed_authorize_types": [
          "token"
        ]
      },
      "notifications": {
        "shared_secret": "",
        "oauth_on_keychange_url": ""
      },
      "enable_ip_whitelisting": true,
      "allowed_ips": [
        "127.0.0.1"
      ],
      "use_keyless": false,
      "enable_signature_checking": false,
      "use_basic_auth": false,
      "active": true,
      "enable_batch_request_support": true,
      "hook_references": [
        {
          "event_name": "QuotaExceeded",
          "hook": {
            "api_model": {},
            "id": "54be6c0beba6db07a6000002",
            "org_id": "54b53d3aeba6db5c35000002",
            "name": "Test Post",
            "method": "POST",
            "target_path": "http://httpbin.org/post",
            "template_path": "",
            "header_map": {
              "x-tyk-test": "123456"
            },
            "event_timeout": 0
          },
          "event_timeout": 60
        }
      ]
    }
    const response = await axios.post(apiUrl, bodyRequest, {headers: headersRequest});
    return response.data;
  }
}
